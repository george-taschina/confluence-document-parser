import { KafkaContext } from '@nestjs/microservices';
import { ParserService } from './parser.service';
export declare class ParserController {
    private readonly parserService;
    private readonly logger;
    private readonly maxRetries;
    constructor(parserService: ParserService);
    parseDocument(message: any, context: KafkaContext): Promise<void>;
}
//# sourceMappingURL=parser.controller.d.ts.map