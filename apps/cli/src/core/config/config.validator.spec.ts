import { Test, TestingModule } from '@nestjs/testing';
import { ConfigValidator } from './config.validator';
import type { Config } from './config.service';

describe('ConfigValidator', () => {
  let validator: ConfigValidator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigValidator],
    }).compile();

    validator = module.get<ConfigValidator>(ConfigValidator);
  });

  it('should be defined', () => {
    expect(validator).toBeDefined();
  });

  describe('validateStraionConfig', () => {
    it('should throw error if endpoint is missing', () => {
      const config: Config = {};
      expect(() => validator.validateStraionConfig(config)).toThrow(
        'Straion endpoint not configured',
      );
    });

    it('should throw error if apiKey is missing', () => {
      const config: Config = {
        straion: { endpoint: 'http://localhost:3000', apiKey: '' },
      };
      expect(() => validator.validateStraionConfig(config)).toThrow(
        'Straion API key not configured',
      );
    });

    it('should not throw error if both endpoint and apiKey are present', () => {
      const config: Config = {
        straion: { endpoint: 'http://localhost:3000', apiKey: 'test-key' },
      };
      expect(() => validator.validateStraionConfig(config)).not.toThrow();
    });
  });

  describe('validateConfluenceConfig', () => {
    it('should throw error if baseUrl is missing', () => {
      const config: Config = {};
      expect(() => validator.validateConfluenceConfig(config)).toThrow(
        'Confluence base URL not configured',
      );
    });

    it('should throw error if email is missing', () => {
      const config: Config = {
        confluence: {
          baseUrl: 'https://test.atlassian.net',
          email: '',
          apiToken: 'token',
        },
      };
      expect(() => validator.validateConfluenceConfig(config)).toThrow(
        'Confluence email not configured',
      );
    });

    it('should throw error if apiToken is missing', () => {
      const config: Config = {
        confluence: {
          baseUrl: 'https://test.atlassian.net',
          email: 'test@example.com',
          apiToken: '',
        },
      };
      expect(() => validator.validateConfluenceConfig(config)).toThrow(
        'Confluence API token not configured',
      );
    });

    it('should not throw error if all fields are present', () => {
      const config: Config = {
        confluence: {
          baseUrl: 'https://test.atlassian.net',
          email: 'test@example.com',
          apiToken: 'test-token',
        },
      };
      expect(() => validator.validateConfluenceConfig(config)).not.toThrow();
    });
  });
});
