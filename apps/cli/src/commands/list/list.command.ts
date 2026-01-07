import { Command, CommandRunner, Option } from 'nest-commander';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../core/config/config.service';
import { ConfigValidator } from '../../core/config/config.validator';
import { UiService } from '../../core/ui/ui.service';
import { ErrorHandlerService } from '../../core/error/error-handler.service';
import { ConfluenceService } from '../../integrations/confluence/confluence.service';

interface ListCommandOptions {
  source?: string;
  spaceId?: number;
}

@Command({
  name: 'list',
  description: 'List documents from a source platform',
})
@Injectable()
export class ListCommand extends CommandRunner {
  constructor(
    private readonly configService: ConfigService,
    private readonly configValidator: ConfigValidator,
    private readonly uiService: UiService,
    private readonly errorHandler: ErrorHandlerService,
    private readonly confluenceService: ConfluenceService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options: ListCommandOptions,
  ): Promise<void> {
    const spinner = this.uiService.spinner('Fetching documents...').start();

    try {
      const config = this.configService.load();

      if (options.source === 'confluence') {
        try {
          this.configValidator.validateConfluenceConfig(config);
        } catch (error: any) {
          spinner.fail(this.uiService.chalk.red('Confluence not configured'));
          this.uiService.warn('\nRun: straion auth');
          process.exit(1);
        }

        if (!options.spaceId) {
          spinner.fail(this.uiService.chalk.red('Space key is required for Confluence'));
          process.exit(1);
        }

        const pages = await this.confluenceService.getSpacePages(options.spaceId);

        spinner.succeed(
          this.uiService.chalk.green(`Found ${pages.length} pages in space ${options.spaceId}`),
        );

        console.log(this.uiService.chalk.bold('\nAvailable Pages:'));
        pages.forEach((page, index) => {
          console.log(
            this.uiService.chalk.blue(`${index + 1}.`),
            page.title,
            this.uiService.chalk.gray(`(ID: ${page.id})`),
          );
        });
      } else {
        spinner.fail(this.uiService.chalk.red(`Unsupported source: ${options.source}`));
        process.exit(1);
      }
    } catch (error: any) {
      this.errorHandler.handle(error, spinner);
    }
  }

  @Option({
    flags: '-s, --source <platform>',
    description: 'Source platform (confluence, gdocs)',
  })
  parseSource(val: string): string {
    return val;
  }

  @Option({
    flags: '--space-id <id>',
    description: 'Confluence space ID',
  })
  parseSpaceId(val: string): number {
    return parseInt(val, 10);
  }
}
