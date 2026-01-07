import { Injectable } from '@nestjs/common';
import { Config } from './config.service';

@Injectable()
export class ConfigValidator {
  /**
   * Validate Straion configuration
   */
  validateStraionConfig(config: Config): void {
    if (!config.straion?.endpoint) {
      throw new Error('Straion endpoint not configured. Run: straion auth');
    }
    if (!config.straion?.apiKey) {
      throw new Error('Straion API key not configured. Run: straion auth');
    }
  }

  /**
   * Validate Confluence configuration
   */
  validateConfluenceConfig(config: Config): void {
    if (!config.confluence?.baseUrl) {
      throw new Error('Confluence base URL not configured. Run: straion auth');
    }
    if (!config.confluence?.email) {
      throw new Error('Confluence email not configured. Run: straion auth');
    }
    if (!config.confluence?.apiToken) {
      throw new Error('Confluence API token not configured. Run: straion auth');
    }
  }
}
