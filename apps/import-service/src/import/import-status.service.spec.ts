import { Test, TestingModule } from '@nestjs/testing';
import { ImportStatusService } from './import-status.service';
import { ImportStatusDto } from '../dto/import.dto';

describe('ImportStatusService', () => {
  let service: ImportStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportStatusService],
    }).compile();

    service = module.get<ImportStatusService>(ImportStatusService);
  });

  afterEach(() => {
    // Clear in-memory storage between tests
    service['importStatus'].clear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('set', () => {
    it('should store an import status', () => {
      const importId = 'test-import-123';
      const status: ImportStatusDto = {
        importId,
        status: 'processing',
      };

      service.set(importId, status);

      expect(service.get(importId)).toEqual(status);
    });

    it('should update an existing import status', () => {
      const importId = 'test-import-123';
      const initialStatus: ImportStatusDto = {
        importId,
        status: 'processing',
      };
      const updatedStatus: ImportStatusDto = {
        importId,
        status: 'completed',
        parsedContent: { id: '1', title: 'Test', content: 'Test', spaceKey: 'TEST' },
      };

      service.set(importId, initialStatus);
      service.set(importId, updatedStatus);

      expect(service.get(importId)).toEqual(updatedStatus);
    });
  });

  describe('get', () => {
    it('should return the status for a valid importId', () => {
      const importId = 'test-import-123';
      const status: ImportStatusDto = {
        importId,
        status: 'processing',
      };

      service.set(importId, status);

      expect(service.get(importId)).toEqual(status);
    });

    it('should return undefined for a non-existent importId', () => {
      expect(service.get('non-existent-id')).toBeUndefined();
    });
  });

  describe('has', () => {
    it('should return true if importId exists', () => {
      const importId = 'test-import-123';
      const status: ImportStatusDto = {
        importId,
        status: 'processing',
      };

      service.set(importId, status);

      expect(service.has(importId)).toBe(true);
    });

    it('should return false if importId does not exist', () => {
      expect(service.has('non-existent-id')).toBe(false);
    });
  });

  describe('multiple imports', () => {
    it('should handle multiple concurrent imports', () => {
      const imports = [
        { importId: 'import-1', status: 'processing' as const },
        { importId: 'import-2', status: 'completed' as const },
        { importId: 'import-3', status: 'failed' as const, error: 'Test error' },
      ];

      imports.forEach((importData) => service.set(importData.importId, importData));

      imports.forEach((importData) => {
        expect(service.get(importData.importId)).toEqual(importData);
      });

      expect(service.has('import-1')).toBe(true);
      expect(service.has('import-2')).toBe(true);
      expect(service.has('import-3')).toBe(true);
      expect(service.has('import-4')).toBe(false);
    });
  });
});
