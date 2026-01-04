import ora from 'ora';
import chalk from 'chalk';
import { ConfigManager } from '../utils/config';
import { ConfluenceClient } from '../integrations/confluence';

interface ListOptions {
  source: string;
  spaceId?: number;
}

export async function listCommand(options: ListOptions) {
  const spinner = ora('Fetching documents...').start();

  try {
    const configManager = new ConfigManager();
    const config = configManager.load();

    if (options.source === 'confluence') {
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

      if (!options.spaceId) {
        spinner.fail(chalk.red('Space key is required for Confluence'));
        process.exit(1);
      }

      const pages = await client.getSpacePages(options.spaceId);

      spinner.succeed(chalk.green(`Found ${pages.length} pages in space ${options.spaceId}`));

      console.log(chalk.bold('\nAvailable Pages:'));
      pages.forEach((page, index) => {
        console.log(chalk.blue(`${index + 1}.`), page.title, chalk.gray(`(ID: ${page.id})`));
      });
    } else {
      spinner.fail(chalk.red(`Unsupported source: ${options.source}`));
      process.exit(1);
    }
  } catch (error: any) {
    spinner.fail(chalk.red('Failed to fetch documents'));
    console.error(chalk.red('Error:'), JSON.stringify(error));
    process.exit(1);
  }
}
