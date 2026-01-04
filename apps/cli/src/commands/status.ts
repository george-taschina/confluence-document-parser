import axios from 'axios';
import ora from 'ora';
import chalk from 'chalk';
import { ConfigManager } from '../utils/config';

export async function statusCommand(importId: string) {
  const spinner = ora('Checking import status...').start();

  try {
    const configManager = new ConfigManager();
    const config = configManager.load();

    if (!config.straion?.endpoint) {
      spinner.fail(chalk.red('Straion endpoint not configured'));
      console.log(chalk.yellow('\nRun: straion auth configure'));
      process.exit(1);
    }

    const response = await axios.get(
      `${config.straion.endpoint}/import/status/${importId}`,
      {
        headers: {
          Authorization: `Bearer ${config.straion.apiKey}`,
        },
        timeout: 5000,
      }
    );

    const { status, parsedContent, storageUrl, error } = response.data;

    spinner.succeed(chalk.green('Status retrieved'));

    console.log(chalk.blue('\nImport ID:'), importId);
    console.log(chalk.blue('Status:'), getStatusDisplay(status));

    if (status === 'completed' && parsedContent) {
      console.log(chalk.green('\n✓ Import completed successfully!'));
      console.log(chalk.blue('Storage URL:'), storageUrl || 'N/A');
      console.log(chalk.blue('\nParsed Document:'));
      console.log(chalk.bold('  Title:'), parsedContent.title);
      console.log(chalk.bold('  Context:'), parsedContent.context?.substring(0, 100) + '...');
      console.log(chalk.bold('  Decision:'), parsedContent.decision?.substring(0, 100) + '...');
    } else if (status === 'processing') {
      console.log(chalk.yellow('\n⏳ Document is still being processed...'));
      console.log(chalk.gray('   Try again in a few seconds'));
    } else if (status === 'failed') {
      console.log(chalk.red('\n✗ Import failed'));
      if (error) {
        console.log(chalk.red('Error:'), error);
      }
    }

  } catch (error: any) {
    spinner.fail(chalk.red('Failed to get status'));
    if (error.response?.status === 404) {
      console.error(chalk.red(`\nImport ID "${importId}" not found`));
    } else if (error.response) {
      console.error(chalk.red('Error:'), error.response.data.message || error.message);
    } else {
      console.error(chalk.red('Error:'), error.message);
    }
    process.exit(1);
  }
}

function getStatusDisplay(status: string): string {
  switch (status) {
    case 'pending':
      return chalk.gray('⏸  Pending');
    case 'processing':
      return chalk.yellow('⏳ Processing');
    case 'completed':
      return chalk.green('✓ Completed');
    case 'failed':
      return chalk.red('✗ Failed');
    default:
      return chalk.gray(status);
  }
}
