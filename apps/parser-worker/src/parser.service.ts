import { Injectable, Logger } from '@nestjs/common';
import Anthropic from '@anthropic-ai/sdk';

export interface ParsedADR {
  title: string;
  context: string;
  decision: string;
  consequences: string;
}

@Injectable()
export class ParserService {
  private readonly logger = new Logger(ParserService.name);
  private readonly anthropic: Anthropic;

  constructor() {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      this.logger.warn('ANTHROPIC_API_KEY not set. Parser will fail.');
    }
    this.anthropic = new Anthropic({ apiKey });
  }

  async parseToADR(content: string, title: string): Promise<ParsedADR> {
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
        .map((block) => (block as any).text)
        .join('');

      this.logger.log(`Successfully parsed: ${title}`);
      return JSON.parse(textContent);
    } catch (error: any) {
      this.logger.error(`Failed to parse document: ${error.message}`);
      throw new Error(`AI parsing failed: ${error.message}`);
    }
  }
}
