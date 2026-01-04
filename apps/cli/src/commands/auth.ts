import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { ConfigManager } from '../utils/config';
import { ConfluenceClient } from '../integrations/confluence';

export async function authCommand() {
  console.log(chalk.bold('\n🔐 Straion Authentication Configuration\n'));

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

  const configManager = new ConfigManager();
  const config = configManager.load();

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
    const spinner = ora('Testing Confluence connection...').start();
    const confluenceClient = await ConfluenceClient.create({
      baseUrl: config.confluence.baseUrl,
      email: config.confluence.email,
      apiToken: config.confluence.apiToken
    });

    try {
      await confluenceClient.getSpaces();
      spinner.succeed(chalk.green('Confluence connection successful!'));
    } catch (error) {
      spinner.warn(chalk.yellow('Could not verify Confluence connection'));
    }
  }

  configManager.save(config);

  console.log(chalk.green('\n✓ Configuration saved successfully!'));
  console.log(chalk.gray(`Config location: ${configManager.getConfigPath()}\n`));
}
