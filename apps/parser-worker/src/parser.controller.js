"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ParserController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const parser_service_1 = require("./parser.service");
let ParserController = ParserController_1 = class ParserController {
    parserService;
    logger = new common_1.Logger(ParserController_1.name);
    maxRetries = 3;
    constructor(parserService) {
        this.parserService = parserService;
    }
    async parseDocument(message, context) {
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
        }
        catch (error) {
            this.logger.error(`Parse failed for ${importId}: ${error.message}`);
            const retryCount = parseInt(message.retryCount || '0');
            if (retryCount < this.maxRetries) {
                const delay = Math.pow(2, retryCount) * 1000;
                this.logger.log(`Retry ${retryCount + 1}/${this.maxRetries} for ${importId} (delay: ${delay}ms)`);
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
            }
            else {
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
};
exports.ParserController = ParserController;
__decorate([
    (0, microservices_1.MessagePattern)('document.fetched'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], ParserController.prototype, "parseDocument", null);
exports.ParserController = ParserController = ParserController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [parser_service_1.ParserService])
], ParserController);
//# sourceMappingURL=parser.controller.js.map