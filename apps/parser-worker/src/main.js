"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger('ParserWorker');
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: 'parser-worker',
                brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
            },
            consumer: {
                groupId: 'parser-workers',
                allowAutoTopicCreation: true,
            },
            producer: {
                allowAutoTopicCreation: true,
            },
        },
    });
    await app.listen();
    logger.log('Parser Worker is listening for messages...');
    logger.log('Consumer Group: parser-workers');
    logger.log('Kafka Broker: ' + (process.env.KAFKA_BROKER || 'localhost:9092'));
}
bootstrap();
//# sourceMappingURL=main.js.map