import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@nestjs/common';
import { ParserService, ParsedADR } from './parser.service';
import Anthropic from '@anthropic-ai/sdk';

// Mock the Anthropic SDK
jest.mock('@anthropic-ai/sdk');

describe('ParserService', () => {
  let service: ParserService;
  let mockAnthropic: jest.Mocked<Anthropic>;

  beforeEach(async () => {
    // Clear environment variables
    delete process.env.ANTHROPIC_API_KEY;

    const module: TestingModule = await Test.createTestingModule({
      providers: [ParserService],
    }).compile();

    service = module.get<ParserService>(ParserService);
    mockAnthropic = service['anthropic'] as jest.Mocked<Anthropic>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('constructor', () => {
    it('should warn when ANTHROPIC_API_KEY is not set', () => {
      // Spy on Logger prototype before creating instance
      const warnSpy = jest.spyOn(Logger.prototype, 'warn').mockImplementation();

      // Clear environment variable
      delete process.env.ANTHROPIC_API_KEY;

      // Create new instance without API key
      new ParserService();

      expect(warnSpy).toHaveBeenCalledWith(
        'ANTHROPIC_API_KEY not set. Parser will fail.',
      );

      warnSpy.mockRestore();
    });

    it('should initialize Anthropic client with API key', () => {
      process.env.ANTHROPIC_API_KEY = 'test-api-key';

      const newService = new ParserService();

      expect(Anthropic).toHaveBeenCalledWith({ apiKey: 'test-api-key' });
    });
  });

  describe('parseToADR', () => {
    const mockDocument = {
      title: 'Use Microservices Architecture',
      content: `
        <h1>Context</h1>
        <p>We need to scale our system to handle more traffic...</p>
        <h1>Decision</h1>
        <p>We will adopt a microservices architecture...</p>
        <h1>Consequences</h1>
        <p>Better scalability but increased operational complexity.</p>
      `,
    };

    const mockADRResponse: ParsedADR = {
      title: 'Use Microservices Architecture',
      context: 'We need to scale our system to handle more traffic...',
      decision: 'We will adopt a microservices architecture...',
      consequences: 'Better scalability but increased operational complexity.',
    };

    beforeEach(() => {
      // Mock the Anthropic API response
      mockAnthropic.messages = {
        create: jest.fn().mockResolvedValue({
          content: [
            {
              type: 'text',
              text: JSON.stringify(mockADRResponse),
            },
          ],
        }),
      } as any;
    });

    it('should successfully parse a document to ADR format', async () => {
      const result = await service.parseToADR(
        mockDocument.content,
        mockDocument.title,
      );

      expect(result).toEqual(mockADRResponse);
      expect(result.title).toBe('Use Microservices Architecture');
      expect(result.context).toContain('scale our system');
      expect(result.decision).toContain('microservices architecture');
      expect(result.consequences).toContain('scalability');
    });

    it('should call Anthropic API with correct parameters', async () => {
      await service.parseToADR(mockDocument.content, mockDocument.title);

      expect(mockAnthropic.messages.create).toHaveBeenCalledWith({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: expect.stringContaining(mockDocument.title),
          },
        ],
      });
    });

    it('should include all ADR sections in the response', async () => {
      const result = await service.parseToADR(
        mockDocument.content,
        mockDocument.title,
      );

      expect(result).toHaveProperty('title');
      expect(result).toHaveProperty('context');
      expect(result).toHaveProperty('decision');
      expect(result).toHaveProperty('consequences');
    });

    it('should log successful parsing', async () => {
      const loggerSpy = jest.spyOn(service['logger'], 'log');

      await service.parseToADR(mockDocument.content, mockDocument.title);

      expect(loggerSpy).toHaveBeenCalledWith(
        expect.stringContaining('Parsing document'),
      );
      expect(loggerSpy).toHaveBeenCalledWith(
        expect.stringContaining('Successfully parsed'),
      );
    });

    it('should handle Anthropic API errors', async () => {
      const apiError = new Error('API rate limit exceeded');
      mockAnthropic.messages.create = jest.fn().mockRejectedValue(apiError);

      await expect(
        service.parseToADR(mockDocument.content, mockDocument.title),
      ).rejects.toThrow('AI parsing failed: API rate limit exceeded');
    });

    it('should log errors when parsing fails', async () => {
      const loggerSpy = jest.spyOn(service['logger'], 'error');
      mockAnthropic.messages.create = jest
        .fn()
        .mockRejectedValue(new Error('Network error'));

      await expect(
        service.parseToADR(mockDocument.content, mockDocument.title),
      ).rejects.toThrow();

      expect(loggerSpy).toHaveBeenCalledWith(
        expect.stringContaining('Failed to parse document'),
      );
    });

    it('should handle invalid JSON response from Claude', async () => {
      mockAnthropic.messages.create = jest.fn().mockResolvedValue({
        content: [
          {
            type: 'text',
            text: 'Invalid JSON response',
          },
        ],
      });

      await expect(
        service.parseToADR(mockDocument.content, mockDocument.title),
      ).rejects.toThrow();
    });

    it('should handle empty content blocks', async () => {
      mockAnthropic.messages.create = jest.fn().mockResolvedValue({
        content: [],
      });

      await expect(
        service.parseToADR(mockDocument.content, mockDocument.title),
      ).rejects.toThrow();
    });

    it('should filter and combine multiple text blocks', async () => {
      mockAnthropic.messages.create = jest.fn().mockResolvedValue({
        content: [
          { type: 'text', text: '{"title":"Part 1",' },
          { type: 'image', data: 'ignored' },
          { type: 'text', text: '"context":"Part 2",' },
          { type: 'text', text: '"decision":"Part 3",' },
          { type: 'text', text: '"consequences":"Part 4"}' },
        ],
      });

      const result = await service.parseToADR(
        mockDocument.content,
        mockDocument.title,
      );

      expect(result.title).toBe('Part 1');
      expect(result.context).toBe('Part 2');
      expect(result.decision).toBe('Part 3');
      expect(result.consequences).toBe('Part 4');
    });

    it('should use provided title in the prompt', async () => {
      const customTitle = 'Custom ADR Title';

      await service.parseToADR(mockDocument.content, customTitle);

      expect(mockAnthropic.messages.create).toHaveBeenCalledWith(
        expect.objectContaining({
          messages: [
            {
              role: 'user',
              content: expect.stringContaining(customTitle),
            },
          ],
        }),
      );
    });

    it('should handle long documents', async () => {
      const longContent = '<p>Content</p>'.repeat(1000);

      await service.parseToADR(longContent, 'Long Document');

      expect(mockAnthropic.messages.create).toHaveBeenCalled();
    });
  });
});
