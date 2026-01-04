import axios from 'axios';
import ora from 'ora';
import chalk from 'chalk';
import { ConfigManager } from '../utils/config';
import { ConfluenceClient } from '../integrations/confluence';

interface ImportOptions {
  source: string;
  spaceKey?: string;
  pageId?: number;
}

export async function importCommand(options: ImportOptions) {
  const spinner = ora('Submitting import request...').start();

  try {
    const configManager = new ConfigManager();
    const config = configManager.load();

    if (!config.straion?.endpoint) {
      spinner.fail(chalk.red('Straion endpoint not configured'));
      console.log(chalk.yellow('\nRun: straion auth configure'));
      process.exit(1);
    }

    if (!options.pageId) {
      spinner.fail(chalk.red('Page ID is required'));
      console.log(chalk.yellow('\nUsage: straion import --source confluence --page-id <id>'));
      process.exit(1);
    }

    // Validate Confluence credentials for Confluence source
    if (options.source === 'confluence') {
      if (!config.confluence?.baseUrl || !config.confluence?.email || !config.confluence?.apiToken) {
        spinner.fail(chalk.red('Confluence credentials not configured'));
        console.log(chalk.yellow('\nRun: straion auth configure'));
        process.exit(1);
      }
    }

    // Fetch content based on source
    let pageData;
    if (options.source === 'confluence') {
      if(!config.confluence?.baseUrl || !config.confluence?.email || !config.confluence?.apiToken) {
        spinner.fail(chalk.red('Confluence credentials not configured'));
        console.log(chalk.yellow('\nConfluence credentials not configured'));
        process.exit(1);
      }

      spinner.text = 'Fetching page content from Confluence...';
      const confluenceClient = await ConfluenceClient.create({
        baseUrl: config.confluence.baseUrl,
        email: config.confluence.email,
        apiToken: config.confluence.apiToken
      });

      pageData = await confluenceClient.getPage(options.pageId);
    }

    // Submit import request with content
    spinner.text = 'Submitting import request...';
    const response = await axios.post(
      `${config.straion.endpoint}/import`,
      {
        source: options.source,
        page: pageData,
      },
      {
        headers: {
          Authorization: `Bearer ${config.straion?.apiKey}`,
        },
        timeout: 10000,
      }
    );

    const { importId, status } = response.data;

    spinner.succeed(chalk.green('Import request submitted!'));
    console.log(chalk.blue('\nImport ID:'), importId);
    console.log(chalk.blue('Status:'), status);

    if (status === 'processing') {
      console.log(chalk.gray('\n💡 Document is being processed asynchronously'));
      console.log(chalk.gray(`   Check status: straion status ${importId}`));
    }

  } catch (error: any) {
    spinner.fail(chalk.red('Import failed'));
    if (error.response) {
      console.error(chalk.red('Error:'), error.response.data.message || error.message);
      if (error.response.status === 401) {
        console.log(chalk.yellow('\nCheck your API credentials with: straion auth configure'));
      } else if (error.response.status === 404 && error.config?.baseURL?.includes('atlassian')) {
        console.log(chalk.yellow('\nPage not found in Confluence. Check the page ID.'));
      }
    } else if (error.code === 'ECONNREFUSED') {
      console.error(chalk.red('Error: Cannot connect to Straion service'));
      console.log(chalk.yellow(`Endpoint: ${error.config?.baseURL || 'unknown'}`));
      console.log(chalk.gray('\nMake sure the import service is running:'));
      console.log(chalk.gray('  docker-compose up -d'));
    } else {
      console.error(chalk.red('Error:'), error.message);
    }
    process.exit(1);
  }
}
