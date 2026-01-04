import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_SERVICE',
        useFactory: (configService: ConfigService) => {
          const kafkaBroker =
            process.env.KAFKA_BROKER ||
            configService.get<string>('KAFKA_BROKER') ||
            'kafka:9092';
          console.log(
            `[KafkaModule] Connecting to Kafka broker: ${kafkaBroker}`,
          );

          return {
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: 'straion-import-service',
                brokers: [kafkaBroker],
              },
              consumer: {
                groupId: 'import-service-group',
              },
              producer: {
                allowAutoTopicCreation: true,
              },
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class KafkaModule {}
