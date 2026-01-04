import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('ParserWorker');

  const kafkaBroker = process.env.KAFKA_BROKER || 'kafka:9092';
  logger.log(`Initializing parser worker with Kafka broker: ${kafkaBroker}`);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'parser-worker',
          brokers: [kafkaBroker],
        },
        consumer: {
          groupId: 'parser-workers',
        },
        producer: {
          allowAutoTopicCreation: true,
        },
      },
    },
  );

  await app.listen();
  logger.log('Parser Worker is listening for messages...');
  logger.log(`Consumer Group: parser-workers-server (NestJS will append -server)`);
  logger.log(`Client ID: parser-worker-server (NestJS will append -server)`);
  logger.log(`Kafka Broker: ${kafkaBroker}`);
}

bootstrap();
