import { Module } from '@nestjs/common';
import { ConfluenceService } from './confluence.service';

@Module({
  providers: [ConfluenceService],
  exports: [ConfluenceService],
})
export class ConfluenceModule {}
