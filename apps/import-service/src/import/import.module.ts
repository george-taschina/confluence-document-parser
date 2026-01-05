import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ImportController } from './import.controller';
import { ImportStatusService } from './import-status.service';
import { ImportUseCase } from './import.usecase';
import { KafkaModule } from '../kafka/kafka.module';
import { KafkaConsumerController } from '../kafka/kafka-consumer.controller';
import { KafkaUseCase } from '../kafka/kafka.usecase';

@Module({
  imports: [HttpModule, KafkaModule],
  controllers: [ImportController, KafkaConsumerController],
  providers: [ImportStatusService, ImportUseCase, KafkaUseCase],
})
export class ImportModule {}
