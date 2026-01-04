import { Injectable, Logger } from '@nestjs/common';
import { ImportStatusService } from '../import/import-status.service';

@Injectable()
export class KafkaUseCase {
  private readonly logger = new Logger(KafkaUseCase.name);

  constructor(private readonly importStatusService: ImportStatusService) {}

  completeImport(
    importId: string,
    parsedContent: {
      id: string;
      title: string;
      content: string;
      spaceKey: string;
    },
    storageUrl?: string,
  ): void {
    if (!this.importStatusService.has(importId)) {
      this.logger.warn(`Import ID ${importId} not found, skipping completion`);
      return;
    }

    this.importStatusService.set(importId, {
      importId,
      status: 'completed',
      parsedContent,
      storageUrl,
    });
    this.logger.log(`Import ${importId} completed successfully`);
  }

  failImport(importId: string, error: string): void {
    if (!this.importStatusService.has(importId)) {
      this.logger.warn(`Import ID ${importId} not found, skipping failure`);
      return;
    }

    this.importStatusService.set(importId, {
      importId,
      status: 'failed',
      error,
    });
    this.logger.error(`Import ${importId} failed: ${error}`);
  }
}
