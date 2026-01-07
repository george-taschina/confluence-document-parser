import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigValidator } from './config.validator';

@Module({
  providers: [ConfigService, ConfigValidator],
  exports: [ConfigService, ConfigValidator],
})
export class ConfigModule {}
