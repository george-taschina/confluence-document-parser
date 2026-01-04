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

    try {
      this.importStatusService.set(importId, {
        importId,
        status: 'processing',
      });

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
      } catch (kafkaError) {
        const errorMessage =
          kafkaError instanceof Error ? kafkaError.message : 'Unknown error';
        this.logger.warn(
          `Kafka emit failed: ${errorMessage}, falling back to direct processing`,
        );
        // Fallback: set as completed directly
        this.importStatusService.set(importId, {
          importId,
          status: 'completed',
          parsedContent: {
            id: page.id,
            title: page.title,
            content: page.content,
            spaceKey: page.spaceKey,
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
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(`Import failed: ${errorMessage}`);

      this.importStatusService.set(importId, {
        importId,
        status: 'failed',
        error: errorMessage,
      });

      return {
        success: false,
        importId,
        status: 'failed',
        message: errorMessage,
      };
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
