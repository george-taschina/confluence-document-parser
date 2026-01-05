import { Test, TestingModule } from '@nestjs/testing';
import { INestMicroservice } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { ParserService, ParsedADR } from '../src/parser.service';
import { ParserController } from '../src/parser.controller';
import { KafkaContext } from '@nestjs/microservices';

describe('Parser Worker Kafka Integration (e2e)', () => {
  let app: INestMicroservice;
  let parserService: ParserService;

  const createMockKafkaContext = (offset: string = '0'): Partial<KafkaContext> => {
    const sentMessages: Array<{ topic: string; messages: any[] }> = [];

    return {
      getMessage: jest.fn().mockReturnValue({ offset }),
      getProducer: jest.fn().mockReturnValue({
        send: jest.fn().mockImplementation((message) => {
          sentMessages.push(message);
          return Promise.resolve();
        }),
      }),
      getSentMessages: () => sentMessages,
    } as any;
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    parserService = moduleFixture.get<ParserService>(ParserService);
  });

  afterAll(async () => {
    await app.close();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('document.fetched message handling', () => {
    const mockMessage = {
      importId: 'test-import-123',
      source: 'confluence',
      documentId: 'page-456',
      content: '<h1>Context</h1><p>We need to scale...</p>',
      title: 'Use Microservices',
      spaceKey: 'TECH',
      timestamp: new Date().toISOString(),
    };

    const mockParsedADR: ParsedADR = {
      title: 'Use Microservices',
      context: 'We need to scale our system...',
      decision: 'We will adopt microservices...',
      consequences: 'Better scalability but increased complexity.',
    };

    it('should process a valid message and publish to document.parsed', async () => {
      const context = createMockKafkaContext('100') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockResolvedValue(mockParsedADR);

      const controller = app.get(ParserController);
      await controller.parseDocument(mockMessage, context);

      const producer = context.getProducer();
      expect(producer.send).toHaveBeenCalledWith({
        topic: 'document.parsed',
        messages: expect.arrayContaining([
          expect.objectContaining({
            key: mockMessage.importId,
            value: expect.any(String),
          }),
        ]),
      });

      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );
      expect(sentValue).toMatchObject({
        importId: mockMessage.importId,
        source: mockMessage.source,
        parsedContent: mockParsedADR,
      });
    });

    it('should call ParserService with correct parameters', async () => {
      const context = createMockKafkaContext('100') as KafkaContext;
      const parseToADRSpy = jest
        .spyOn(parserService, 'parseToADR')
        .mockResolvedValue(mockParsedADR);

      const controller = app.get(ParserController);
      await controller.parseDocument(mockMessage, context);

      expect(parseToADRSpy).toHaveBeenCalledWith(
        mockMessage.content,
        mockMessage.title,
      );
    });

    it('should include timestamp in published message', async () => {
      const context = createMockKafkaContext('100') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockResolvedValue(mockParsedADR);

      const controller = app.get(ParserController);
      await controller.parseDocument(mockMessage, context);

      const producer = context.getProducer();
      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );

      expect(sentValue.timestamp).toBeDefined();
      expect(new Date(sentValue.timestamp)).toBeInstanceOf(Date);
    });
  });

  describe('retry mechanism', () => {
    const mockMessage = {
      importId: 'retry-test-123',
      source: 'confluence',
      documentId: 'page-789',
      content: '<p>Content</p>',
      title: 'Test Document',
      spaceKey: 'TEST',
      timestamp: new Date().toISOString(),
    };

    it('should retry on first failure', async () => {
      const context = createMockKafkaContext('200') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue(
        new Error('Temporary failure'),
      );

      const controller = app.get(ParserController);
      await controller.parseDocument(mockMessage, context);

      const producer = context.getProducer();
      expect(producer.send).toHaveBeenCalledWith({
        topic: 'document.fetched',
        messages: expect.arrayContaining([
          expect.objectContaining({
            key: mockMessage.importId,
          }),
        ]),
      });

      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );
      expect(sentValue.retryCount).toBe(1);
    });

    it('should increment retry count on subsequent failures', async () => {
      const context = createMockKafkaContext('200') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue(
        new Error('Still failing'),
      );

      const messageWithRetry = { ...mockMessage, retryCount: '1' };

      const controller = app.get(ParserController);
      await controller.parseDocument(messageWithRetry, context);

      const producer = context.getProducer();
      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );
      expect(sentValue.retryCount).toBe(2);
    });

    it('should apply exponential backoff', async () => {
      const context = createMockKafkaContext('200') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue(
        new Error('Backoff test'),
      );

      const messageWithRetry = { ...mockMessage, retryCount: '2' };

      const controller = app.get(ParserController);
      const startTime = Date.now();
      await controller.parseDocument(messageWithRetry, context);
      const duration = Date.now() - startTime;

      // Retry 2 should wait 2^2 * 1000 = 4000ms
      expect(duration).toBeGreaterThanOrEqual(4000);
      expect(duration).toBeLessThan(5000);
    });

    it('should move to DLQ after max retries', async () => {
      const context = createMockKafkaContext('200') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue(
        new Error('Max retries exceeded'),
      );

      const messageWithMaxRetries = { ...mockMessage, retryCount: '3' };

      const controller = app.get(ParserController);
      await controller.parseDocument(messageWithMaxRetries, context);

      const producer = context.getProducer();
      expect(producer.send).toHaveBeenCalledWith({
        topic: 'document.failed',
        messages: expect.arrayContaining([
          expect.objectContaining({
            key: mockMessage.importId,
          }),
        ]),
      });

      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );
      expect(sentValue).toMatchObject({
        importId: mockMessage.importId,
        error: 'Max retries exceeded',
        retries: 3,
      });
    });
  });

  describe('Dead Letter Queue (DLQ)', () => {
    const mockMessage = {
      importId: 'dlq-test-123',
      source: 'confluence',
      documentId: 'page-999',
      content: '<p>Invalid content</p>',
      title: 'Failed Document',
      spaceKey: 'TEST',
      timestamp: new Date().toISOString(),
    };

    it('should preserve original message in DLQ', async () => {
      const context = createMockKafkaContext('300') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue(
        new Error('Permanent failure'),
      );

      const messageWithMaxRetries = { ...mockMessage, retryCount: '3' };

      const controller = app.get(ParserController);
      await controller.parseDocument(messageWithMaxRetries, context);

      const producer = context.getProducer();
      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );

      expect(sentValue.originalMessage).toEqual(messageWithMaxRetries);
    });

    it('should include error details in DLQ message', async () => {
      const context = createMockKafkaContext('300') as KafkaContext;
      const errorMessage = 'Claude API rate limit exceeded';
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue(
        new Error(errorMessage),
      );

      const messageWithMaxRetries = { ...mockMessage, retryCount: '3' };

      const controller = app.get(ParserController);
      await controller.parseDocument(messageWithMaxRetries, context);

      const producer = context.getProducer();
      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );

      expect(sentValue.error).toBe(errorMessage);
    });

    it('should include timestamp in DLQ message', async () => {
      const context = createMockKafkaContext('300') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue(
        new Error('Failed'),
      );

      const messageWithMaxRetries = { ...mockMessage, retryCount: '3' };

      const controller = app.get(ParserController);
      await controller.parseDocument(messageWithMaxRetries, context);

      const producer = context.getProducer();
      const sentValue = JSON.parse(
        (producer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );

      expect(sentValue.timestamp).toBeDefined();
      expect(new Date(sentValue.timestamp)).toBeInstanceOf(Date);
    });
  });

  describe('error handling edge cases', () => {
    it('should handle non-Error exceptions', async () => {
      const context = createMockKafkaContext('400') as KafkaContext;
      jest.spyOn(parserService, 'parseToADR').mockRejectedValue('String error');

      const mockMessage = {
        importId: 'edge-case-1',
        content: '<p>Test</p>',
        title: 'Test',
        source: 'confluence',
      };

      const controller = app.get(ParserController);
      await expect(
        controller.parseDocument(mockMessage, context),
      ).resolves.not.toThrow();
    });

    it('should handle missing message fields gracefully', async () => {
      const context = createMockKafkaContext('400') as KafkaContext;
      const mockParsedADR: ParsedADR = {
        title: 'Test',
        context: 'Context',
        decision: 'Decision',
        consequences: 'Consequences',
      };
      jest.spyOn(parserService, 'parseToADR').mockResolvedValue(mockParsedADR);

      const incompleteMessage = {
        importId: 'incomplete-123',
        content: '<p>Content</p>',
        title: 'Title',
        // Missing source, documentId, etc.
      };

      const controller = app.get(ParserController);
      await expect(
        controller.parseDocument(incompleteMessage as any, context),
      ).resolves.not.toThrow();
    });
  });

  describe('performance and concurrency', () => {
    it('should handle multiple messages concurrently', async () => {
      const mockParsedADR: ParsedADR = {
        title: 'Test',
        context: 'Context',
        decision: 'Decision',
        consequences: 'Consequences',
      };
      jest.spyOn(parserService, 'parseToADR').mockResolvedValue(mockParsedADR);

      const controller = app.get(ParserController);

      const messages = Array.from({ length: 10 }, (_, i) => ({
        importId: `concurrent-${i}`,
        source: 'confluence',
        documentId: `page-${i}`,
        content: `<p>Content ${i}</p>`,
        title: `Document ${i}`,
        spaceKey: 'TEST',
        timestamp: new Date().toISOString(),
      }));

      const contexts = messages.map(() => createMockKafkaContext());

      const results = await Promise.all(
        messages.map((msg, i) =>
          controller.parseDocument(msg, contexts[i] as KafkaContext),
        ),
      );

      results.forEach((result) => {
        expect(result).toBeUndefined(); // parseDocument doesn't return a value
      });

      expect(parserService.parseToADR).toHaveBeenCalledTimes(10);
    });
  });
});
