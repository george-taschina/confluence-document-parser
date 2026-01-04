import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ImportController } from './import.controller';
import { ImportStatusService } from './import-status.service';
import { ImportUseCase } from './import.usecase';
import { KafkaModule } from '../kafka/kafka.module';
import { KafkaConsumerService } from '../kafka/kafka-consumer.service';
import { KafkaUseCase } from '../kafka/kafka.usecase';

@Module({
  imports: [HttpModule, KafkaModule],
  controllers: [ImportController, KafkaConsumerService],
  providers: [ImportStatusService, ImportUseCase, KafkaUseCase],
})
export class ImportModule {}
