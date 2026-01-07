import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import fs from 'fs';
import os from 'os';
import path from 'path';

jest.mock('fs');
jest.mock('os');

describe('ConfigService', () => {
  let service: ConfigService;
  const mockHomedir = '/mock/home';
  const mockConfigPath = path.join(mockHomedir, '.straion', 'config.json');

  beforeEach(async () => {
    // Set up os.homedir mock before creating the service
    (os.homedir as jest.Mock).mockReturnValue(mockHomedir);

    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('load', () => {
    it('should return empty object if config file does not exist', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);

      const result = service.load();

      expect(result).toEqual({});
    });

    it('should load and parse config file', () => {
      const mockConfig = {
        straion: { endpoint: 'http://localhost:3000', apiKey: 'test' },
      };

      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue(
        JSON.stringify(mockConfig),
      );

      const result = service.load();

      expect(result).toEqual(mockConfig);
      expect(fs.readFileSync).toHaveBeenCalledWith(mockConfigPath, 'utf-8');
    });

    it('should return empty object on parse error', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue('invalid json');

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      const result = service.load();

      expect(result).toEqual({});
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('save', () => {
    it('should create config directory and save config', () => {
      const mockConfig = {
        straion: { endpoint: 'http://localhost:3000', apiKey: 'test' },
      };

      (fs.existsSync as jest.Mock).mockReturnValue(false);
      (fs.mkdirSync as jest.Mock).mockImplementation();
      (fs.writeFileSync as jest.Mock).mockImplementation();

      service.save(mockConfig);

      expect(fs.mkdirSync).toHaveBeenCalled();
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        mockConfigPath,
        JSON.stringify(mockConfig, null, 2),
        { mode: 0o600 },
      );
    });
  });

  describe('getConfigPath', () => {
    it('should return config path', () => {
      const result = service.getConfigPath();
      expect(result).toBe(mockConfigPath);
    });
  });

  describe('delete', () => {
    it('should delete config file if it exists', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.unlinkSync as jest.Mock).mockImplementation();

      service.delete();

      expect(fs.unlinkSync).toHaveBeenCalledWith(mockConfigPath);
    });

    it('should do nothing if config file does not exist', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);

      service.delete();

      expect(fs.unlinkSync).not.toHaveBeenCalled();
    });
  });
});
