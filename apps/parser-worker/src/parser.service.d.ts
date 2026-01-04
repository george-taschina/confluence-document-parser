export interface ParsedADR {
    title: string;
    context: string;
    decision: string;
    consequences: string;
}
export declare class ParserService {
    private readonly logger;
    private readonly anthropic;
    constructor();
    parseToADR(content: string, title: string): Promise<ParsedADR>;
}
//# sourceMappingURL=parser.service.d.ts.map