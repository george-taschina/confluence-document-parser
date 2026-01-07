import { Command, CommandRunner } from 'nest-commander';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../core/config/config.service';
import { ConfigValidator } from '../../core/config/config.validator';
import { UiService } from '../../core/ui/ui.service';
import { ErrorHandlerService } from '../../core/error/error-handler.service';
import { HttpService } from '../../core/http/http.service';

@Command({
  name: 'status',
  arguments: '<import-id>',
  description: 'Check the status of an import',
})
@Injectable()
export class StatusCommand extends CommandRunner {
  constructor(
    private readonly configService: ConfigService,
    private readonly configValidator: ConfigValidator,
    private readonly uiService: UiService,
    private readonly errorHandler: ErrorHandlerService,
    private readonly httpService: HttpService,
  ) {
    super();
  }

  async run(params: string[]): Promise<void> {
    const importId = params[0];
    const spinner = this.uiService.spinner('Checking import status...').start();

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

      const response = await this.httpService.get<{
        status: string;
        parsedContent?: any;
        storageUrl?: string;
        error?: string;
      }>(`/import/status/${importId}`);

      const { status, parsedContent, storageUrl, error } = response;

      spinner.succeed(this.uiService.chalk.green('Status retrieved'));

      console.log(this.uiService.chalk.blue('\nImport ID:'), importId);
      console.log(this.uiService.chalk.blue('Status:'), this.getStatusDisplay(status));

      if (status === 'completed' && parsedContent) {
        console.log(this.uiService.chalk.green('\n✓ Import completed successfully!'));
        console.log(this.uiService.chalk.blue('Storage URL:'), storageUrl || 'N/A');
        console.log(this.uiService.chalk.blue('\nParsed Document:'));
        console.log(this.uiService.chalk.bold('  Title:'), parsedContent.title);
        console.log(
          this.uiService.chalk.bold('  Context:'),
          parsedContent.context?.substring(0, 100) + '...',
        );
        console.log(
          this.uiService.chalk.bold('  Decision:'),
          parsedContent.decision?.substring(0, 100) + '...',
        );
      } else if (status === 'processing') {
        console.log(this.uiService.chalk.yellow('\n⏳ Document is still being processed...'));
        console.log(this.uiService.chalk.gray('   Try again in a few seconds'));
      } else if (status === 'failed') {
        console.log(this.uiService.chalk.red('\n✗ Import failed'));
        if (error) {
          console.log(this.uiService.chalk.red('Error:'), error);
        }
      }
    } catch (error: any) {
      this.errorHandler.handle(error, spinner);
    }
  }

  private getStatusDisplay(status: string): string {
    switch (status) {
      case 'pending':
        return this.uiService.chalk.gray('⏸  Pending');
      case 'processing':
        return this.uiService.chalk.yellow('⏳ Processing');
      case 'completed':
        return this.uiService.chalk.green('✓ Completed');
      case 'failed':
        return this.uiService.chalk.red('✗ Failed');
      default:
        return this.uiService.chalk.gray(status);
    }
  }
}
