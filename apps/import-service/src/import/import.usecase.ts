import { Injectable, Inject, Logger, NotFoundException } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { v4 as uuidv4 } from 'uuid';
import { lastValueFrom } from 'rxjs';
import { timeout } from 'rxjs/operators';
import {
  ImportDocumentDto,
  ImportResponseDto,
  ImportStatusDto,
} from '../dto/import.dto';
import { ImportStatusService } from './import-status.service';

@Injectable()
export class ImportUseCase {
  private readonly logger = new Logger(ImportUseCase.name);

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
    private readonly importStatusService: ImportStatusService,
  ) {}

  async startImport(importDto: ImportDocumentDto): Promise<ImportResponseDto> {
    const importId = uuidv4();
    this.logger.log(`Starting import: ${importId} from ${importDto.source}`);

    // Initialize status
    this.importStatusService.set(importId, {
      importId,
      status: 'processing',
    });

    // Attempt to publish to Kafka
    const publishedSuccessfully = await this.publishToKafka(
      importId,
      importDto,
    );

    // Fallback: if Kafka fails, set as completed directly
    if (!publishedSuccessfully) {
      this.importStatusService.set(importId, {
        importId,
        status: 'completed',
        parsedContent: {
          id: importDto.page.id,
          title: importDto.page.title,
          content: importDto.page.content,
          spaceKey: importDto.page.spaceKey,
        },
      });
    }

    return {
      success: true,
      importId,
      status: 'processing',
      message:
        'Document queued for processing. Use /import/status/:id to check progress',
    };
  }

  private async publishToKafka(
    importId: string,
    importDto: ImportDocumentDto,
  ): Promise<boolean> {
    const { page } = importDto;

    try {
      await lastValueFrom(
        this.kafkaClient
          .emit('document.fetched', {
            key: importId,
            value: JSON.stringify({
              importId,
              source: importDto.source,
              documentId: page.id,
              content: page.content,
              title: page.title,
              spaceKey: page.spaceKey,
              timestamp: new Date().toISOString(),
            }),
          })
          .pipe(timeout(5000)),
      );

      this.logger.log(`Document queued for processing: ${importId}`);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      this.logger.warn(
        `Kafka publish failed for ${importId}: ${errorMessage}. Falling back to direct processing.`,
      );
      return false;
    }
  }

  getImportStatus(importId: string): ImportStatusDto {
    const status = this.importStatusService.get(importId);

    if (!status) {
      throw new NotFoundException(`Import ID ${importId} not found`);
    }

    return status;
  }
}
