import { Module } from '@nestjs/common';
import { ImportCommand } from './import.command';
import { ConfluenceModule } from '../../integrations/confluence/confluence.module';

@Module({
  imports: [ConfluenceModule],
  providers: [ImportCommand],
})
export class ImportModule {}
