import ora from 'ora';
import chalk from 'chalk';
import { ConfigManager } from '../utils/config';
import { ConfluenceClient } from '../integrations/confluence';

export async function spacesCommand() {
  const spinner = ora('Fetching spaces...').start();

  try {
    const configManager = new ConfigManager();
    const config = configManager.load();

    if (!config.confluence) {
      spinner.fail(chalk.red('Confluence not configured'));
      console.log(chalk.yellow('\nRun: straion auth configure'));
      process.exit(1);
    }

    const client = await ConfluenceClient.create({
      baseUrl: config.confluence.baseUrl,
      email: config.confluence.email,
      apiToken: config.confluence.apiToken
    });

    const spaces = await client.getSpaces();

    spinner.succeed(chalk.green(`Found ${spaces.length} spaces`));

    console.log(chalk.bold('\nAvailable Spaces:'));
    spaces.forEach((space, index) => {
      console.log(
        chalk.blue(`${index + 1}.`),
        chalk.bold(space.name),
        chalk.gray(`(Key: ${space.key}, ID: ${space.id})`)
      );
    });
  } catch (error: any) {
    spinner.fail(chalk.red('Failed to fetch spaces'));

    if (error.response) {
      console.error(chalk.red('Error:'), `${error.response.status} - ${error.response.statusText}`);
      if (error.response.data) {
        console.error(chalk.red('Details:'), JSON.stringify(error.response.data, null, 2));
      }
    } else if (error.message) {
      console.error(chalk.red('Error:'), error.message);
      if (error.originalError) {
        console.error(chalk.red('Original Error:'), error.originalError);
      }
    } else {
      console.error(chalk.red('Error:'), JSON.stringify(error));
    }
    process.exit(1);
  }
}
