import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  DocumentParsedMessage,
  DocumentFailedMessage,
  KafkaMessage,
} from '../dto/kafka.dto';
import { KafkaUseCase } from './kafka.usecase';

@Controller()
export class KafkaConsumerController {
  private readonly logger = new Logger(KafkaConsumerController.name);

  constructor(private readonly kafkaUseCase: KafkaUseCase) {}

  @EventPattern('document.parsed')
  handleDocumentParsed(
    @Payload() message: KafkaMessage<DocumentParsedMessage>,
  ) {
    this.logger.log(`Received parsed document: ${JSON.stringify(message)}`);
    const data: DocumentParsedMessage =
      typeof message === 'string'
        ? (JSON.parse(message) as DocumentParsedMessage)
        : message;

    this.kafkaUseCase.completeImport(
      data.importId,
      data.parsedContent,
      data.storageUrl,
    );
  }

  @EventPattern('document.failed')
  handleDocumentFailed(
    @Payload() message: KafkaMessage<DocumentFailedMessage>,
  ) {
    this.logger.error(`Document failed: ${JSON.stringify(message)}`);
    const data: DocumentFailedMessage =
      typeof message === 'string'
        ? (JSON.parse(message) as DocumentFailedMessage)
        : message;

    this.kafkaUseCase.failImport(data.importId, data.error);
  }
}
