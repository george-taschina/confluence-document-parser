import ora from 'ora';
import chalk from 'chalk';
import { ConfigManager } from '../utils/config';
import { ConfluenceClient } from '../integrations/confluence';

interface SpaceOptions {
  key: string;
}

export async function spaceCommand(options: SpaceOptions) {
  const spinner = ora('Fetching space information...').start();

  try {
    const configManager = new ConfigManager();
    const config = configManager.load();

    if (!config.confluence) {
      spinner.fail(chalk.red('Confluence not configured'));
      console.log(chalk.yellow('\nRun: straion auth configure'));
      process.exit(1);
    }

    if (!options.key) {
      spinner.fail(chalk.red('Space key is required'));
      console.log(chalk.yellow('\nUsage: straion space --key <KEY>'));
      process.exit(1);
    }

    const client = await ConfluenceClient.create({
      baseUrl: config.confluence.baseUrl,
      email: config.confluence.email,
      apiToken: config.confluence.apiToken
    });

    const space = await client.getSpace(options.key);
    spinner.succeed(chalk.green('Space information retrieved successfully'));

    console.log(chalk.bold('\nSpace Details:'));
    console.log(chalk.blue('ID:'), space.id);
    console.log(chalk.blue('Key:'), space.key);
    console.log(chalk.blue('Name:'), space.name);
    console.log(chalk.blue('Type:'), space.type);
  } catch (error: any) {
    spinner.fail(chalk.red('Failed to fetch space information'));

    if (error.response) {
      if (error.response.status === 404) {
        console.error(chalk.red('Error:'), `Space with key "${options.key}" not found`);
      } else if (error.response.status === 401) {
        console.error(chalk.red('Error:'), 'Authentication failed. Please check your credentials.');
      } else {
        console.error(chalk.red('Error:'), error.response.data?.message || error.message);
      }
    } else {
      console.error(chalk.red('Error:'), JSON.stringify(error));
    }
    process.exit(1);
  }
}
