import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../core/config/config.service';
import { ConfluenceClient } from './client/confluenceClient';
import type { ConfluencePage, ConfluenceSpace } from './domain/definitions';

@Injectable()
export class ConfluenceService {
  private client?: ConfluenceClient;

  constructor(private readonly configService: ConfigService) {}

  /**
   * Ensure the Confluence client is initialized
   */
  private async ensureClient(): Promise<ConfluenceClient> {
    if (!this.client) {
      const config = this.configService.load();

      if (!config.confluence) {
        throw new Error('Confluence not configured. Run: straion auth');
      }

      this.client = await ConfluenceClient.create(config.confluence);
    }

    return this.client;
  }

  /**
   * Get a single Confluence page by ID
   */
  async getPage(pageId: number): Promise<ConfluencePage> {
    const client = await this.ensureClient();
    return client.getPage(pageId);
  }

  /**
   * Get a Confluence space by key
   */
  async getSpace(spaceKey: string): Promise<ConfluenceSpace> {
    const client = await this.ensureClient();
    return client.getSpace(spaceKey);
  }

  /**
   * Get all Confluence spaces
   */
  async getSpaces(): Promise<ConfluenceSpace[]> {
    const client = await this.ensureClient();
    return client.getSpaces();
  }

  /**
   * Get all pages in a Confluence space
   */
  async getSpacePages(
    spaceId: number,
    pageSize?: number,
  ): Promise<ConfluencePage[]> {
    const client = await this.ensureClient();
    return client.getSpacePages(spaceId, pageSize);
  }
}
