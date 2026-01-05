import { Test, TestingModule } from '@nestjs/testing';
import { ImportUseCase } from './import.usecase';
import { ImportStatusService } from './import-status.service';
import { ClientKafka } from '@nestjs/microservices';
import { NotFoundException } from '@nestjs/common';
import { of, throwError } from 'rxjs';
import { ImportDocumentDto } from '../dto/import.dto';

describe('ImportUseCase', () => {
  let useCase: ImportUseCase;
  let statusService: ImportStatusService;
  let kafkaClient: ClientKafka;

  const mockKafkaClient = {
    emit: jest.fn(),
    connect: jest.fn(),
    close: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImportUseCase,
        ImportStatusService,
        {
          provide: 'KAFKA_SERVICE',
          useValue: mockKafkaClient,
        },
      ],
    }).compile();

    useCase = module.get<ImportUseCase>(ImportUseCase);
    statusService = module.get<ImportStatusService>(ImportStatusService);
    kafkaClient = module.get<ClientKafka>('KAFKA_SERVICE');

    // Clear status service between tests
    statusService['importStatus'].clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('startImport', () => {
    const validImportDto: ImportDocumentDto = {
      source: 'confluence',
      page: {
        id: 'page-123',
        title: 'Test Page',
        content: '<p>Test content</p>',
        spaceKey: 'TEST',
      },
    };

    it('should successfully start an import with Kafka', async () => {
      mockKafkaClient.emit.mockReturnValue(of({}));

      const result = await useCase.startImport(validImportDto);

      expect(result).toMatchObject({
        success: true,
        status: 'processing',
        message: expect.stringContaining('queued for processing'),
      });
      expect(result.importId).toBeDefined();
      expect(mockKafkaClient.emit).toHaveBeenCalledWith(
        'document.fetched',
        expect.objectContaining({
          key: result.importId,
          value: expect.stringContaining(validImportDto.page.id),
        }),
      );
    });

    it('should set status to processing initially', async () => {
      mockKafkaClient.emit.mockReturnValue(of({}));

      const result = await useCase.startImport(validImportDto);

      const status = statusService.get(result.importId);
      expect(status).toMatchObject({
        importId: result.importId,
        status: 'processing',
      });
    });

    it('should fallback to completed status when Kafka fails', async () => {
      mockKafkaClient.emit.mockReturnValue(
        throwError(() => new Error('Kafka connection failed')),
      );

      const result = await useCase.startImport(validImportDto);

      expect(result.success).toBe(true);

      const status = statusService.get(result.importId);
      expect(status?.status).toBe('completed');
      expect(status?.parsedContent).toMatchObject({
        id: validImportDto.page.id,
        title: validImportDto.page.title,
        content: validImportDto.page.content,
        spaceKey: validImportDto.page.spaceKey,
      });
    });

    it('should include all required fields in Kafka message', async () => {
      mockKafkaClient.emit.mockReturnValue(of({}));

      const result = await useCase.startImport(validImportDto);

      expect(mockKafkaClient.emit).toHaveBeenCalledWith(
        'document.fetched',
        expect.objectContaining({
          key: result.importId,
          value: expect.any(String),
        }),
      );

      const emittedValue = JSON.parse(
        mockKafkaClient.emit.mock.calls[0][1].value,
      );
      expect(emittedValue).toMatchObject({
        importId: result.importId,
        source: 'confluence',
        documentId: 'page-123',
        content: '<p>Test content</p>',
        title: 'Test Page',
        spaceKey: 'TEST',
        timestamp: expect.any(String),
      });
    });

    it('should handle timeout errors gracefully', async () => {
      mockKafkaClient.emit.mockReturnValue(
        throwError(() => ({ name: 'TimeoutError', message: 'Timeout has occurred' })),
      );

      const result = await useCase.startImport(validImportDto);

      expect(result.success).toBe(true);
      const status = statusService.get(result.importId);
      expect(status?.status).toBe('completed');
    });
  });

  describe('getImportStatus', () => {
    it('should return status for valid importId', () => {
      const importId = 'test-import-123';
      const expectedStatus = {
        importId,
        status: 'processing' as const,
      };

      statusService.set(importId, expectedStatus);

      const result = useCase.getImportStatus(importId);

      expect(result).toEqual(expectedStatus);
    });

    it('should throw NotFoundException for non-existent importId', () => {
      expect(() => useCase.getImportStatus('non-existent-id')).toThrow(
        NotFoundException,
      );
    });

    it('should return completed status with parsed content', () => {
      const importId = 'test-import-123';
      const expectedStatus = {
        importId,
        status: 'completed' as const,
        parsedContent: {
          id: 'page-123',
          title: 'Test',
          content: 'Test content',
          spaceKey: 'TEST',
        },
      };

      statusService.set(importId, expectedStatus);

      const result = useCase.getImportStatus(importId);

      expect(result).toEqual(expectedStatus);
    });

    it('should return failed status with error message', () => {
      const importId = 'test-import-123';
      const expectedStatus = {
        importId,
        status: 'failed' as const,
        error: 'Parse failed: Invalid format',
      };

      statusService.set(importId, expectedStatus);

      const result = useCase.getImportStatus(importId);

      expect(result).toEqual(expectedStatus);
    });
  });

  describe('publishToKafka (private method behavior)', () => {
    it('should return true when Kafka publish succeeds', async () => {
      mockKafkaClient.emit.mockReturnValue(of({}));

      const dto: ImportDocumentDto = {
        source: 'confluence',
        page: {
          id: 'page-1',
          title: 'Test',
          content: 'Content',
          spaceKey: 'TEST',
        },
      };

      const result = await useCase.startImport(dto);
      const status = statusService.get(result.importId);

      // If status is still 'processing', Kafka succeeded
      expect(status?.status).toBe('processing');
    });

    it('should return false and log warning when Kafka publish fails', async () => {
      const loggerSpy = jest.spyOn(useCase['logger'], 'warn');
      mockKafkaClient.emit.mockReturnValue(
        throwError(() => new Error('Kafka broker unavailable')),
      );

      const dto: ImportDocumentDto = {
        source: 'confluence',
        page: {
          id: 'page-1',
          title: 'Test',
          content: 'Content',
          spaceKey: 'TEST',
        },
      };

      await useCase.startImport(dto);

      expect(loggerSpy).toHaveBeenCalledWith(
        expect.stringContaining('Kafka publish failed'),
      );
    });
  });
});
