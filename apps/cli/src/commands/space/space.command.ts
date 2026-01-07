import { Command, CommandRunner, Option } from 'nest-commander';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../core/config/config.service';
import { ConfigValidator } from '../../core/config/config.validator';
import { UiService } from '../../core/ui/ui.service';
import { ErrorHandlerService } from '../../core/error/error-handler.service';
import { ConfluenceService } from '../../integrations/confluence/confluence.service';

interface SpaceCommandOptions {
  key?: string;
}

@Command({
  name: 'space',
  description: 'Get Confluence space information by key',
})
@Injectable()
export class SpaceCommand extends CommandRunner {
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
    options: SpaceCommandOptions,
  ): Promise<void> {
    const spinner = this.uiService.spinner('Fetching space information...').start();

    try {
      const config = this.configService.load();

      try {
        this.configValidator.validateConfluenceConfig(config);
      } catch (error: any) {
        spinner.fail(this.uiService.chalk.red('Confluence not configured'));
        this.uiService.warn('\nRun: straion auth');
        process.exit(1);
      }

      if (!options.key) {
        spinner.fail(this.uiService.chalk.red('Space key is required'));
        this.uiService.warn('\nUsage: straion space --key <KEY>');
        process.exit(1);
      }

      const space = await this.confluenceService.getSpace(options.key);
      spinner.succeed(this.uiService.chalk.green('Space information retrieved successfully'));

      console.log(this.uiService.chalk.bold('\nSpace Details:'));
      console.log(this.uiService.chalk.blue('ID:'), space.id);
      console.log(this.uiService.chalk.blue('Key:'), space.key);
      console.log(this.uiService.chalk.blue('Name:'), space.name);
      console.log(this.uiService.chalk.blue('Type:'), space.type);
    } catch (error: any) {
      this.errorHandler.handle(error, spinner);
    }
  }

  @Option({
    flags: '--key <spaceKey>',
    description: 'Confluence space key',
  })
  parseKey(val: string): string {
    return val;
  }
}
