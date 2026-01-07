import { Injectable } from '@nestjs/common';
import chalk from 'chalk';
import ora, { Ora } from 'ora';

@Injectable()
export class UiService {
  /**
   * Create and return a spinner
   */
  spinner(text: string): Ora {
    return ora(text);
  }

  /**
   * Display success message
   */
  success(message: string): void {
    console.log(chalk.green(message));
  }

  /**
   * Display error message
   */
  error(message: string): void {
    console.log(chalk.red(message));
  }

  /**
   * Display warning message
   */
  warn(message: string): void {
    console.log(chalk.yellow(message));
  }

  /**
   * Display info message
   */
  info(message: string): void {
    console.log(chalk.blue(message));
  }

  /**
   * Expose chalk for custom formatting
   */
  get chalk() {
    return chalk;
  }
}
