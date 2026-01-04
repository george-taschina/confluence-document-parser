import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Inject,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {
  ImportDocumentDto,
  ImportResponseDto,
  ImportStatusDto,
} from '../dto/import.dto';
import { ImportUseCase } from './import.usecase';

@Controller('import')
export class ImportController implements OnModuleInit {
  private readonly logger = new Logger(ImportController.name);

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
    private readonly importUseCase: ImportUseCase,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
    this.logger.log('Kafka client connected');
  }

  @Post()
  async importDocument(
    @Body() importDto: ImportDocumentDto,
  ): Promise<ImportResponseDto> {
    return this.importUseCase.startImport(importDto);
  }

  @Get('status/:importId')
  getStatus(@Param('importId') importId: string): ImportStatusDto {
    return this.importUseCase.getImportStatus(importId);
  }
}
