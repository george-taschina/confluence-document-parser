import { Module } from '@nestjs/common';
import { UiService } from './ui.service';

@Module({
  providers: [UiService],
  exports: [UiService],
})
export class UiModule {}
