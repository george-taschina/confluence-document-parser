import { Module } from '@nestjs/common';
import { ListCommand } from './list.command';
import { ConfluenceModule } from '../../integrations/confluence/confluence.module';

@Module({
  imports: [ConfluenceModule],
  providers: [ListCommand],
})
export class ListModule {}
