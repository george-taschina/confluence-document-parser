import { Test, TestingModule } from '@nestjs/testing';
import { ParserController } from './parser.controller';
import { ParserService, ParsedADR } from './parser.service';
import { KafkaContext } from '@nestjs/microservices';

describe('ParserController', () => {
  let controller: ParserController;
  let parserService: ParserService;

  const mockParserService = {
    parseToADR: jest.fn(),
  };

  const createMockKafkaContext = (offset: string = '0'): Partial<KafkaContext> => {
    return {
      getMessage: jest.fn().mockReturnValue({ offset }),
      getProducer: jest.fn().mockReturnValue({
        send: jest.fn().mockResolvedValue(undefined),
      }),
    };
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParserController],
      providers: [
        {
          provide: ParserService,
          useValue: mockParserService,
        },
      ],
    }).compile();

    controller = module.get<ParserController>(ParserController);
    parserService = module.get<ParserService>(ParserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('parseDocument', () => {
    const mockMessage = {
      importId: 'test-import-123',
      content: '<p>Test content</p>',
      title: 'Test Document',
      source: 'confluence',
    };

    const mockParsedADR: ParsedADR = {
      title: 'Test ADR',
      context: 'We need to test',
      decision: 'We will test',
      consequences: 'Better quality',
    };

    it('should successfully parse a document', async () => {
      const context = createMockKafkaContext('100') as KafkaContext;
      mockParserService.parseToADR.mockResolvedValue(mockParsedADR);

      await controller.parseDocument(mockMessage, context);

      expect(mockParserService.parseToADR).toHaveBeenCalledWith(
        mockMessage.content,
        mockMessage.title,
      );
    });

    it('should publish parsed document to document.parsed topic', async () => {
      const context = createMockKafkaContext('100') as KafkaContext;
      const mockProducer = context.getProducer();
      mockParserService.parseToADR.mockResolvedValue(mockParsedADR);

      await controller.parseDocument(mockMessage, context);

      expect(mockProducer.send).toHaveBeenCalledWith({
        topic: 'document.parsed',
        messages: [
          {
            key: mockMessage.importId,
            value: expect.stringContaining(mockMessage.importId),
          },
        ],
      });

      const sentValue = JSON.parse(
        (mockProducer.send as jest.Mock).mock.calls[0][0].messages[0].value,
      );
      expect(sentValue).toMatchObject({
        importId: mockMessage.importId,
        source: mockMessage.source,
        parsedContent: mockParsedADR,
        storageUrl: null,
        timestamp: expect.any(String),
      });
    });

    it('should log processing start', async () => {
      const context = createMockKafkaContext('100') as KafkaContext;
      const loggerSpy = jest.spyOn(controller['logger'], 'log');
      mockParserService.parseToADR.mockResolvedValue(mockParsedADR);

      await controller.parseDocument(mockMessage, context);

      expect(loggerSpy).toHaveBeenCalledWith(
        expect.stringContaining('Processing document: test-import-123'),
      );
    });

    it('should log successful parsing', async () => {
      const context = createMockKafkaContext('100') as KafkaContext;
      const loggerSpy = jest.spyOn(controller['logger'], 'log');
      mockParserService.parseToADR.mockResolvedValue(mockParsedADR);

      await controller.parseDocument(mockMessage, context);

      expect(loggerSpy).toHaveBeenCalledWith(
        expect.stringContaining('Successfully parsed: test-import-123'),
      );
    });

    describe('error handling and retries', () => {
      it('should retry on first failure', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        const mockProducer = context.getProducer();
        mockParserService.parseToADR.mockRejectedValue(new Error('Parse failed'));

        const messageWithoutRetry = { ...mockMessage, retryCount: undefined };

        await controller.parseDocument(messageWithoutRetry, context);

        expect(mockProducer.send).toHaveBeenCalledWith({
          topic: 'document.fetched',
          messages: [
            {
              key: mockMessage.importId,
              value: expect.stringContaining('"retryCount":1'),
            },
          ],
        });
      });

      it('should use exponential backoff for retries', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        mockParserService.parseToADR.mockRejectedValue(new Error('Parse failed'));

        const messageWithRetry = { ...mockMessage, retryCount: '1' };

        const startTime = Date.now();
        await controller.parseDocument(messageWithRetry, context);
        const duration = Date.now() - startTime;

        // Retry count 1 should wait 2^1 * 1000 = 2000ms
        expect(duration).toBeGreaterThanOrEqual(2000);
        expect(duration).toBeLessThan(3000);
      });

      it('should move to DLQ after max retries', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        const mockProducer = context.getProducer();
        mockParserService.parseToADR.mockRejectedValue(
          new Error('Persistent failure'),
        );

        const messageWithMaxRetries = { ...mockMessage, retryCount: '3' };

        await controller.parseDocument(messageWithMaxRetries, context);

        expect(mockProducer.send).toHaveBeenCalledWith({
          topic: 'document.failed',
          messages: [
            {
              key: mockMessage.importId,
              value: expect.stringContaining('Persistent failure'),
            },
          ],
        });

        const sentValue = JSON.parse(
          (mockProducer.send as jest.Mock).mock.calls[0][0].messages[0].value,
        );
        expect(sentValue).toMatchObject({
          importId: mockMessage.importId,
          originalMessage: messageWithMaxRetries,
          error: 'Persistent failure',
          retries: 3,
          timestamp: expect.any(String),
        });
      });

      it('should log error when parsing fails', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        const loggerSpy = jest.spyOn(controller['logger'], 'error');
        mockParserService.parseToADR.mockRejectedValue(
          new Error('Claude API timeout'),
        );

        await controller.parseDocument(mockMessage, context);

        expect(loggerSpy).toHaveBeenCalledWith(
          expect.stringContaining('Parse failed for test-import-123'),
        );
      });

      it('should log retry attempt', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        const loggerSpy = jest.spyOn(controller['logger'], 'log');
        mockParserService.parseToADR.mockRejectedValue(new Error('Parse failed'));

        const messageWithRetry = { ...mockMessage, retryCount: '1' };

        await controller.parseDocument(messageWithRetry, context);

        expect(loggerSpy).toHaveBeenCalledWith(
          expect.stringContaining('Retry 2/3 for test-import-123'),
        );
      });

      it('should log when moving to DLQ', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        const loggerSpy = jest.spyOn(controller['logger'], 'error');
        mockParserService.parseToADR.mockRejectedValue(new Error('Failed'));

        const messageWithMaxRetries = { ...mockMessage, retryCount: '3' };

        await controller.parseDocument(messageWithMaxRetries, context);

        expect(loggerSpy).toHaveBeenCalledWith(
          expect.stringContaining('Max retries exceeded, moving to DLQ'),
        );
      });

      it('should handle retry count as string "0"', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        const mockProducer = context.getProducer();
        mockParserService.parseToADR.mockRejectedValue(new Error('Parse failed'));

        const messageWithZeroRetry = { ...mockMessage, retryCount: '0' };

        await controller.parseDocument(messageWithZeroRetry, context);

        const sentValue = JSON.parse(
          (mockProducer.send as jest.Mock).mock.calls[0][0].messages[0].value,
        );
        expect(sentValue.retryCount).toBe(1);
      });

      it('should handle different error types', async () => {
        const context = createMockKafkaContext('100') as KafkaContext;
        mockParserService.parseToADR.mockRejectedValue('String error');

        await controller.parseDocument(mockMessage, context);

        // Should not throw, just retry
        expect(context.getProducer().send).toHaveBeenCalled();
      });
    });

    it('should include offset in logs', async () => {
      const context = createMockKafkaContext('12345') as KafkaContext;
      const loggerSpy = jest.spyOn(controller['logger'], 'log');
      mockParserService.parseToADR.mockResolvedValue(mockParsedADR);

      await controller.parseDocument(mockMessage, context);

      expect(loggerSpy).toHaveBeenCalledWith(
        expect.stringContaining('offset: 12345'),
      );
    });
  });

  describe('maxRetries configuration', () => {
    it('should use maxRetries of 3', () => {
      expect(controller['maxRetries']).toBe(3);
    });
  });
});
