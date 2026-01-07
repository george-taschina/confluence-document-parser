import { Command, CommandRunner } from 'nest-commander';
import { Injectable } from '@nestjs/common';
import inquirer from 'inquirer';
import { ConfigService } from '../../core/config/config.service';
import { UiService } from '../../core/ui/ui.service';
import { ConfluenceClient } from '../../integrations/confluence';

@Command({
  name: 'auth',
  description: 'Configure authentication credentials',
})
@Injectable()
export class AuthCommand extends CommandRunner {
  constructor(
    private readonly configService: ConfigService,
    private readonly uiService: UiService,
  ) {
    super();
  }

  async run(): Promise<void> {
    console.log(this.uiService.chalk.bold('\n🔐 Straion Authentication Configuration\n'));

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'straionEndpoint',
        message: 'Straion API endpoint:',
        default: 'http://localhost:3000',
      },
      {
        type: 'password',
        name: 'straionApiKey',
        message: 'Straion API key:',
        default: 'dev-token-12345', // For dev purposes
      },
      {
        type: 'confirm',
        name: 'configureConfluence',
        message: 'Configure Confluence integration?',
        default: true,
      },
      {
        type: 'input',
        name: 'confluenceBaseUrl',
        message: 'Confluence base URL (e.g., https://your-domain.atlassian.net):',
        when: (answers) => answers.configureConfluence,
      },
      {
        type: 'input',
        name: 'confluenceEmail',
        message: 'Confluence email:',
        when: (answers) => answers.configureConfluence,
      },
      {
        type: 'password',
        name: 'confluenceApiToken',
        message: 'Confluence API token:',
        when: (answers) => answers.configureConfluence,
      },
    ]);

    const config = this.configService.load();

    config.straion = {
      endpoint: answers.straionEndpoint,
      apiKey: answers.straionApiKey,
    };

    if (answers.configureConfluence) {
      config.confluence = {
        baseUrl: answers.confluenceBaseUrl,
        email: answers.confluenceEmail,
        apiToken: answers.confluenceApiToken,
      };

      // Test Confluence connection
      const spinner = this.uiService.spinner('Testing Confluence connection...').start();
      const confluenceClient = await ConfluenceClient.create({
        baseUrl: config.confluence.baseUrl,
        email: config.confluence.email,
        apiToken: config.confluence.apiToken,
      });

      try {
        await confluenceClient.getSpaces();
        spinner.succeed(this.uiService.chalk.green('Confluence connection successful!'));
      } catch (error) {
        spinner.warn(this.uiService.chalk.yellow('Could not verify Confluence connection'));
      }
    }

    this.configService.save(config);

    this.uiService.success('\n✓ Configuration saved successfully!');
    console.log(this.uiService.chalk.gray(`Config location: ${this.configService.getConfigPath()}\n`));
  }
}
