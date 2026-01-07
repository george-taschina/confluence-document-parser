import { Command, CommandRunner, Option } from 'nest-commander';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../core/config/config.service';
import { ConfigValidator } from '../../core/config/config.validator';
import { UiService } from '../../core/ui/ui.service';
import { ErrorHandlerService } from '../../core/error/error-handler.service';
import { HttpService } from '../../core/http/http.service';
import { ConfluenceService } from '../../integrations/confluence/confluence.service';

interface ImportCommandOptions {
  source?: string;
  spaceKey?: string;
  pageId?: number;
}

@Command({
  name: 'import',
  description: 'Import documents from external platforms',
})
@Injectable()
export class ImportCommand extends CommandRunner {
  constructor(
    private readonly configService: ConfigService,
    private readonly configValidator: ConfigValidator,
    private readonly uiService: UiService,
    private readonly errorHandler: ErrorHandlerService,
    private readonly httpService: HttpService,
    private readonly confluenceService: ConfluenceService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options: ImportCommandOptions,
  ): Promise<void> {
    const spinner = this.uiService.spinner('Submitting import request...').start();

    try {
      const config = this.configService.load();

      // Validate Straion config
      try {
        this.configValidator.validateStraionConfig(config);
      } catch (error: any) {
        spinner.fail(this.uiService.chalk.red('Straion endpoint not configured'));
        this.uiService.warn('\nRun: straion auth');
        process.exit(1);
      }

      if (!options.pageId) {
        spinner.fail(this.uiService.chalk.red('Page ID is required'));
        this.uiService.warn('\nUsage: straion import --source confluence --page-id <id>');
        process.exit(1);
      }

      // Validate Confluence credentials for Confluence source
      if (options.source === 'confluence') {
        try {
          this.configValidator.validateConfluenceConfig(config);
        } catch (error: any) {
          spinner.fail(this.uiService.chalk.red('Confluence credentials not configured'));
          this.uiService.warn('\nRun: straion auth');
          process.exit(1);
        }
      }

      // Fetch content based on source
      let pageData;
      if (options.source === 'confluence') {
        spinner.text = 'Fetching page content from Confluence...';
        pageData = await this.confluenceService.getPage(options.pageId);
      }

      // Submit import request with content
      spinner.text = 'Submitting import request...';
      const response = await this.httpService.post<{
        importId: string;
        status: string;
      }>('/import', {
        source: options.source,
        page: pageData,
      });

      const { importId, status } = response;

      spinner.succeed(this.uiService.chalk.green('Import request submitted!'));
      console.log(this.uiService.chalk.blue('\nImport ID:'), importId);
      console.log(this.uiService.chalk.blue('Status:'), status);

      if (status === 'processing') {
        console.log(this.uiService.chalk.gray('\n💡 Document is being processed asynchronously'));
        console.log(this.uiService.chalk.gray(`   Check status: straion status ${importId}`));
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
    flags: '--space-key <key>',
    description: 'Confluence space key',
  })
  parseSpaceKey(val: string): string {
    return val;
  }

  @Option({
    flags: '--page-id <id>',
    description: 'Page ID to import',
  })
  parsePageId(val: string): number {
    return parseInt(val, 10);
  }
}
