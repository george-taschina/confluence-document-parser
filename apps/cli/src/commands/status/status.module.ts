import { Module } from '@nestjs/common';
import { StatusCommand } from './status.command';

@Module({
  providers: [StatusCommand],
})
export class StatusModule {}
