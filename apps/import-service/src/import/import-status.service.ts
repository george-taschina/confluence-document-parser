import { Injectable } from '@nestjs/common';
import { ImportStatusDto } from '../dto/import.dto';

// In-memory storage for demo (use Redis/DB in production)
@Injectable()
export class ImportStatusService {
  private readonly importStatus = new Map<string, ImportStatusDto>();

  set(importId: string, status: ImportStatusDto): void {
    this.importStatus.set(importId, status);
  }

  get(importId: string): ImportStatusDto | undefined {
    return this.importStatus.get(importId);
  }

  has(importId: string): boolean {
    return this.importStatus.has(importId);
  }
}
