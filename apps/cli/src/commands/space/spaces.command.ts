import { Command, CommandRunner } from 'nest-commander';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../core/config/config.service';
import { ConfigValidator } from '../../core/config/config.validator';
import { UiService } from '../../core/ui/ui.service';
import { ErrorHandlerService } from '../../core/error/error-handler.service';
import { ConfluenceService } from '../../integrations/confluence/confluence.service';

@Command({
  name: 'spaces',
  description: 'List all available Confluence spaces',
})
@Injectable()
export class SpacesCommand extends CommandRunner {
  constructor(
    private readonly configService: ConfigService,
    private readonly configValidator: ConfigValidator,
    private readonly uiService: UiService,
    private readonly errorHandler: ErrorHandlerService,
    private readonly confluenceService: ConfluenceService,
  ) {
    super();
  }

  async run(): Promise<void> {
    const spinner = this.uiService.spinner('Fetching spaces...').start();

    try {
      const config = this.configService.load();

      try {
        this.configValidator.validateConfluenceConfig(config);
      } catch (error: any) {
        spinner.fail(this.uiService.chalk.red('Confluence not configured'));
        this.uiService.warn('\nRun: straion auth');
        process.exit(1);
      }

      const spaces = await this.confluenceService.getSpaces();

      spinner.succeed(this.uiService.chalk.green(`Found ${spaces.length} spaces`));

      console.log(this.uiService.chalk.bold('\nAvailable Spaces:'));
      spaces.forEach((space, index) => {
        console.log(
          this.uiService.chalk.blue(`${index + 1}.`),
          this.uiService.chalk.bold(space.name),
          this.uiService.chalk.gray(`(Key: ${space.key}, ID: ${space.id})`),
        );
      });
    } catch (error: any) {
      this.errorHandler.handle(error, spinner);
    }
  }
}
