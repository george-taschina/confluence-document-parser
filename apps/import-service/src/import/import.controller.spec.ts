import { Test, TestingModule } from '@nestjs/testing';
import { ImportController } from './import.controller';
import { ImportUseCase } from './import.usecase';
import {
  ImportDocumentDto,
  ImportResponseDto,
  ImportStatusDto,
  SourcePlatform,
} from '../dto/import.dto';

describe('ImportController', () => {
  let controller: ImportController;

  const mockImportUseCase = {
    startImport: jest.fn(),
    getImportStatus: jest.fn(),
  };

  const mockKafkaClient = {
    connect: jest.fn().mockResolvedValue(undefined),
    close: jest.fn(),
    emit: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportController],
      providers: [
        {
          provide: ImportUseCase,
          useValue: mockImportUseCase,
        },
        {
          provide: 'KAFKA_SERVICE',
          useValue: mockKafkaClient,
        },
      ],
    }).compile();

    controller = module.get<ImportController>(ImportController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('onModuleInit', () => {
    it('should connect to Kafka on module initialization', async () => {
      await controller.onModuleInit();

      expect(mockKafkaClient.connect).toHaveBeenCalled();
    });

    it('should log successful connection', async () => {
      const loggerSpy = jest.spyOn(controller['logger'], 'log');

      await controller.onModuleInit();

      expect(loggerSpy).toHaveBeenCalledWith('Kafka client connected');
    });
  });

  describe('importDocument', () => {
    const validImportDto: ImportDocumentDto = {
      source: SourcePlatform.CONFLUENCE,
      page: {
        id: 'page-123',
        title: 'Test Page',
        content: '<p>Test content</p>',
        spaceKey: 'TEST',
      },
    };

    it('should call importUseCase.startImport with correct parameters', async () => {
      const expectedResponse: ImportResponseDto = {
        success: true,
        importId: 'test-import-123',
        status: 'processing',
        message: 'Import started successfully',
      };

      mockImportUseCase.startImport.mockResolvedValue(expectedResponse);

      const result = await controller.importDocument(validImportDto);

      expect(mockImportUseCase.startImport).toHaveBeenCalledWith(
        validImportDto,
      );
      expect(result).toEqual(expectedResponse);
    });

    it('should return success response for valid import', async () => {
      const expectedResponse: ImportResponseDto = {
        success: true,
        importId: 'import-456',
        status: 'processing',
        message: 'Document queued for processing',
      };

      mockImportUseCase.startImport.mockResolvedValue(expectedResponse);

      const result = await controller.importDocument(validImportDto);

      expect(result.success).toBe(true);
      expect(result.importId).toBe('import-456');
      expect(result.status).toBe('processing');
    });

    it('should propagate errors from use case', async () => {
      mockImportUseCase.startImport.mockRejectedValue(
        new Error('Validation failed'),
      );

      await expect(controller.importDocument(validImportDto)).rejects.toThrow(
        'Validation failed',
      );
    });
  });

  describe('getStatus', () => {
    it('should call importUseCase.getImportStatus with correct importId', () => {
      const importId = 'test-import-123';
      const expectedStatus: ImportStatusDto = {
        importId,
        status: 'processing',
      };

      mockImportUseCase.getImportStatus.mockReturnValue(expectedStatus);

      const result = controller.getStatus(importId);

      expect(mockImportUseCase.getImportStatus).toHaveBeenCalledWith(importId);
      expect(result).toEqual(expectedStatus);
    });

    it('should return processing status', () => {
      const importId = 'import-123';
      const expectedStatus: ImportStatusDto = {
        importId,
        status: 'processing',
      };

      mockImportUseCase.getImportStatus.mockReturnValue(expectedStatus);

      const result = controller.getStatus(importId);

      expect(result.status).toBe('processing');
    });

    it('should return completed status with parsed content', () => {
      const importId = 'import-123';
      const expectedStatus: ImportStatusDto = {
        importId,
        status: 'completed',
        parsedContent: {
          id: 'page-123',
          title: 'Test',
          content: 'Parsed content',
          spaceKey: 'TEST',
        },
      };

      mockImportUseCase.getImportStatus.mockReturnValue(expectedStatus);

      const result = controller.getStatus(importId);

      expect(result.status).toBe('completed');
      expect(result.parsedContent).toBeDefined();
    });

    it('should return failed status with error message', () => {
      const importId = 'import-123';
      const expectedStatus: ImportStatusDto = {
        importId,
        status: 'failed',
        error: 'Parse failed',
      };

      mockImportUseCase.getImportStatus.mockReturnValue(expectedStatus);

      const result = controller.getStatus(importId);

      expect(result.status).toBe('failed');
      expect(result.error).toBe('Parse failed');
    });

    it('should propagate NotFoundException from use case', () => {
      const importId = 'non-existent-id';
      const error = new Error('Import ID not found');
      error.name = 'NotFoundException';

      mockImportUseCase.getImportStatus.mockImplementation(() => {
        throw error;
      });

      expect(() => controller.getStatus(importId)).toThrow(
        'Import ID not found',
      );
    });
  });
});
