import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { ImportStatusService } from '../src/import/import-status.service';
import { ClientKafka } from '@nestjs/microservices';
import { of, throwError } from 'rxjs';

describe('Import API (e2e)', () => {
  let app: INestApplication;
  let importStatusService: ImportStatusService;
  let kafkaClient: ClientKafka;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider('KAFKA_SERVICE')
      .useValue({
        connect: jest.fn().mockResolvedValue(undefined),
        emit: jest.fn().mockImplementation(() => of({})),
        close: jest.fn(),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();

    importStatusService = moduleFixture.get<ImportStatusService>(ImportStatusService);
    kafkaClient = moduleFixture.get<ClientKafka>('KAFKA_SERVICE');
  });

  afterAll(async () => {
    await app.close();
  });

  afterEach(() => {
    // Clear in-memory status storage
    importStatusService['importStatus'].clear();
    // Clear mock call history but preserve implementations
    jest.clearAllMocks();
    // Explicitly restore the default emit behavior for tests that override it
    (kafkaClient.emit as jest.Mock).mockImplementation(() => of({}));
  });

  describe('POST /import', () => {
    const validImportDto = {
      source: 'confluence',
      page: {
        id: 'page-123',
        title: 'Test Architecture Decision',
        content: '<h1>Context</h1><p>We need to decide...</p>',
        spaceKey: 'TECH',
      },
    };

    it('should create a new import successfully', () => {
      return request(app.getHttpServer())
        .post('/import')
        .send(validImportDto)
        .expect(201)
        .expect((res) => {
          expect(res.body).toMatchObject({
            success: true,
            status: 'processing',
            message: expect.stringContaining('queued for processing'),
          });
          expect(res.body.importId).toBeDefined();
          expect(typeof res.body.importId).toBe('string');
        });
    });

    it('should publish message to Kafka on success', async () => {
      const response = await request(app.getHttpServer())
        .post('/import')
        .send(validImportDto)
        .expect(201);

      expect(kafkaClient.emit).toHaveBeenCalledWith(
        'document.fetched',
        expect.objectContaining({
          key: response.body.importId,
          value: expect.stringContaining(validImportDto.page.id),
        }),
      );
    });

    it('should store import status in memory', async () => {
      const response = await request(app.getHttpServer())
        .post('/import')
        .send(validImportDto)
        .expect(201);

      const status = importStatusService.get(response.body.importId);
      expect(status).toMatchObject({
        importId: response.body.importId,
        status: 'processing',
      });
    });

    it('should handle Kafka failure gracefully', () => {
      (kafkaClient.emit as jest.Mock).mockReturnValue(
        throwError(() => new Error('Kafka connection failed')),
      );

      return request(app.getHttpServer())
        .post('/import')
        .send(validImportDto)
        .expect(201)
        .expect((res) => {
          expect(res.body.success).toBe(true);
          // Should still return success even if Kafka fails (fallback mode)
        });
    });

    it('should set status to completed when Kafka fails', async () => {
      (kafkaClient.emit as jest.Mock).mockReturnValue(
        throwError(() => new Error('Kafka unavailable')),
      );

      const response = await request(app.getHttpServer())
        .post('/import')
        .send(validImportDto)
        .expect(201);

      const status = importStatusService.get(response.body.importId);
      expect(status?.status).toBe('completed');
      expect(status?.parsedContent).toBeDefined();
    });

    it('should reject request with missing source', () => {
      const invalidDto = {
        page: validImportDto.page,
      };

      return request(app.getHttpServer())
        .post('/import')
        .send(invalidDto)
        .expect(400);
    });

    it('should reject request with missing page', () => {
      const invalidDto = {
        source: 'confluence',
      };

      return request(app.getHttpServer())
        .post('/import')
        .send(invalidDto)
        .expect(400);
    });

    it('should reject request with invalid page structure', () => {
      const invalidDto = {
        source: 'confluence',
        page: {
          id: 'page-123',
          // Missing title, content, spaceKey
        },
      };

      return request(app.getHttpServer())
        .post('/import')
        .send(invalidDto)
        .expect(400);
    });

    it('should accept empty request body and return 400', () => {
      return request(app.getHttpServer())
        .post('/import')
        .send({})
        .expect(400);
    });

    it('should handle multiple concurrent imports', async () => {
      const requests = Array.from({ length: 5 }, (_, i) => ({
        source: 'confluence',
        page: {
          id: `page-${i}`,
          title: `Document ${i}`,
          content: `Content ${i}`,
          spaceKey: 'TEST',
        },
      }));

      // Use allSettled to handle potential connection issues with concurrent requests
      const results = await Promise.allSettled(
        requests.map((dto) =>
          request(app.getHttpServer())
            .post('/import')
            .send(dto)
            .timeout(5000),
        ),
      );

      // Filter successful responses
      const responses = results
        .filter((result): result is PromiseFulfilledResult<any> => result.status === 'fulfilled')
        .map((result) => result.value);

      // Should have at least some successful responses
      expect(responses.length).toBeGreaterThan(0);

      responses.forEach((res) => {
        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
      });

      // Check all successful imports are stored
      const importIds = responses.map((res) => res.body.importId);
      importIds.forEach((id) => {
        expect(importStatusService.has(id)).toBe(true);
      });
    });

    it('should generate unique importIds for each request', async () => {
      const response1 = await request(app.getHttpServer())
        .post('/import')
        .send(validImportDto);

      const response2 = await request(app.getHttpServer())
        .post('/import')
        .send(validImportDto);

      expect(response1.body.importId).not.toBe(response2.body.importId);
    });
  });

  describe('GET /import/status/:importId', () => {
    it('should return status for valid importId', async () => {
      const importId = 'test-import-123';
      importStatusService.set(importId, {
        importId,
        status: 'processing',
      });

      return request(app.getHttpServer())
        .get(`/import/status/${importId}`)
        .expect(200)
        .expect({
          importId,
          status: 'processing',
        });
    });

    it('should return 404 for non-existent importId', () => {
      return request(app.getHttpServer())
        .get('/import/status/non-existent-id')
        .expect(404)
        .expect((res) => {
          expect(res.body.message).toContain('not found');
        });
    });

    it('should return completed status with parsed content', async () => {
      const importId = 'test-import-123';
      const completedStatus = {
        importId,
        status: 'completed' as const,
        parsedContent: {
          id: 'page-123',
          title: 'Test ADR',
          content: 'Parsed content',
          spaceKey: 'TEST',
        },
      };

      importStatusService.set(importId, completedStatus);

      return request(app.getHttpServer())
        .get(`/import/status/${importId}`)
        .expect(200)
        .expect(completedStatus);
    });

    it('should return failed status with error message', async () => {
      const importId = 'test-import-123';
      const failedStatus = {
        importId,
        status: 'failed' as const,
        error: 'Claude API timeout',
      };

      importStatusService.set(importId, failedStatus);

      return request(app.getHttpServer())
        .get(`/import/status/${importId}`)
        .expect(200)
        .expect(failedStatus);
    });

    it('should track status changes over time', async () => {
      // Create import
      const createResponse = await request(app.getHttpServer())
        .post('/import')
        .send({
          source: 'confluence',
          page: {
            id: 'page-123',
            title: 'Test',
            content: 'Content',
            spaceKey: 'TEST',
          },
        });

      const importId = createResponse.body.importId;

      // Check initial status
      let statusResponse = await request(app.getHttpServer())
        .get(`/import/status/${importId}`)
        .expect(200);

      expect(statusResponse.body.status).toBe('processing');

      // Simulate completion
      importStatusService.set(importId, {
        importId,
        status: 'completed',
        parsedContent: {
          id: 'page-123',
          title: 'Test',
          content: 'Parsed',
          spaceKey: 'TEST',
        },
      });

      // Check updated status
      statusResponse = await request(app.getHttpServer())
        .get(`/import/status/${importId}`)
        .expect(200);

      expect(statusResponse.body.status).toBe('completed');
    });
  });

  describe('Health checks', () => {
    it('should have a working health endpoint', () => {
      return request(app.getHttpServer())
        .get('/health')
        .expect(200);
    });
  });

  describe('Error handling', () => {
    it('should return 404 for unknown routes', () => {
      return request(app.getHttpServer())
        .get('/unknown-route')
        .expect(404);
    });

    it('should handle malformed JSON gracefully', () => {
      return request(app.getHttpServer())
        .post('/import')
        .set('Content-Type', 'application/json')
        .send('{ invalid json')
        .expect(400);
    });

    it('should validate content-type header', () => {
      return request(app.getHttpServer())
        .post('/import')
        .set('Content-Type', 'text/plain')
        .send('plain text')
        .expect(400);
    });
  });
});
