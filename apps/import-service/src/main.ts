import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Enable CORS for CLI access
  app.enableCors();

  // Connect Kafka microservice for event listening
  const kafkaBroker = process.env.KAFKA_BROKER || 'kafka:9092';
  logger.log(`Connecting to Kafka broker: ${kafkaBroker}`);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'straion-import-service',
        brokers: [kafkaBroker],
      },
      consumer: {
        groupId: 'import-service-group',
      },
      subscribe: {
        fromBeginning: false,
      },
    },
  });

  await app.startAllMicroservices();
  logger.log('Kafka microservice connected and listening for events');

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Straion Import Service')
    .setDescription(
      'Document import and parsing service with event-driven architecture',
    )
    .setVersion('1.0')
    .addTag('import')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  logger.log(`Import Service running on http://localhost:${port}`);
  logger.log(`Swagger documentation: http://localhost:${port}/api`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
