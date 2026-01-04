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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ParserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserService = void 0;
const common_1 = require("@nestjs/common");
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
let ParserService = ParserService_1 = class ParserService {
    logger = new common_1.Logger(ParserService_1.name);
    anthropic;
    constructor() {
        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey) {
            this.logger.warn('ANTHROPIC_API_KEY not set. Parser will fail.');
        }
        this.anthropic = new sdk_1.default({ apiKey });
    }
    async parseToADR(content, title) {
        this.logger.log(`Parsing document: ${title}`);
        const prompt = `You are a document parser. Convert the following document into an Architecture Decision Record (ADR) format.

The ADR must have exactly these sections:
- Title: A clear, descriptive title (use provided title: "${title}" if appropriate)
- Context: The problem or background
- Decision: The final choice made
- Consequences: Impact, benefits, and trade-offs

Here is the document content:

${content}

Return ONLY a JSON object with keys: title, context, decision, consequences. No markdown, no explanation.`;
        try {
            const message = await this.anthropic.messages.create({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 2000,
                messages: [
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
            });
            const textContent = message.content
                .filter((block) => block.type === 'text')
                .map((block) => block.text)
                .join('');
            this.logger.log(`Successfully parsed: ${title}`);
            return JSON.parse(textContent);
        }
        catch (error) {
            this.logger.error(`Failed to parse document: ${error.message}`);
            throw new Error(`AI parsing failed: ${error.message}`);
        }
    }
};
exports.ParserService = ParserService;
exports.ParserService = ParserService = ParserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ParserService);
//# sourceMappingURL=parser.service.js.map