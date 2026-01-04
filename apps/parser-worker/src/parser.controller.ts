import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, KafkaContext } from '@nestjs/microservices';
import { ParserService } from './parser.service';

@Controller()
export class ParserController {
  private readonly logger = new Logger(ParserController.name);
  private readonly maxRetries = 3;

  constructor(private readonly parserService: ParserService) {}

  @MessagePattern('document.fetched')
  async parseDocument(@Payload() message: any, @Ctx() context: KafkaContext) {
    const { importId, content, title, source } = message;
    const offset = context.getMessage().offset;

    this.logger.log(`Processing document: ${importId} (offset: ${offset})`);

    try {
      const parsedADR = await this.parserService.parseToADR(content, title);

      await context.getProducer().send({
        topic: 'document.parsed',
        messages: [
          {
            key: importId,
            value: JSON.stringify({
              importId,
              source,
              parsedContent: parsedADR,
              storageUrl: null,
              timestamp: new Date().toISOString(),
            }),
          },
        ],
      });

      this.logger.log(`Successfully parsed: ${importId}`);
    } catch (error: any) {
      this.logger.error(`Parse failed for ${importId}: ${error.message}`);

      const retryCount = parseInt(message.retryCount || '0');

      if (retryCount < this.maxRetries) {
        const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
        this.logger.log(
          `Retry ${retryCount + 1}/${this.maxRetries} for ${importId} (delay: ${delay}ms)`,
        );

        // In production, use a delayed retry queue
        await new Promise(resolve => setTimeout(resolve, delay));

        await context.getProducer().send({
          topic: 'document.fetched',
          messages: [
            {
              key: importId,
              value: JSON.stringify({
                ...message,
                retryCount: retryCount + 1,
              }),
            },
          ],
        });
      } else {
        this.logger.error(`Max retries exceeded, moving to DLQ: ${importId}`);

        await context.getProducer().send({
          topic: 'document.failed',
          messages: [
            {
              key: importId,
              value: JSON.stringify({
                importId,
                originalMessage: message,
                error: error.message,
                timestamp: new Date().toISOString(),
                retries: this.maxRetries,
              }),
            },
          ],
        });
      }
    }
  }
}
