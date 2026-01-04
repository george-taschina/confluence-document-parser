import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImportModule } from './import/import.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ImportModule,
    HealthModule,
  ],
})
export class AppModule {}
