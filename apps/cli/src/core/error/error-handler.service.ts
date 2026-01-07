import { Injectable } from '@nestjs/common';
import { UiService } from '../ui/ui.service';
import type { Ora } from 'ora';

@Injectable()
export class ErrorHandlerService {
  constructor(private readonly ui: UiService) {}

  /**
   * Handle errors and exit the process
   */
  handle(error: any, spinner?: Ora): never {
    if (spinner) {
      spinner.fail(this.ui.chalk.red('Operation failed'));
    }

    // Map HTTP status codes to user-friendly messages
    if (error.response?.status === 401) {
      this.ui.error('Authentication failed. Please check your credentials.');
      this.ui.warn('\nRun: straion auth');
    } else if (error.response?.status === 403) {
      this.ui.error('Access forbidden. You do not have permission to access this resource.');
    } else if (error.response?.status === 404) {
      this.ui.error('Resource not found.');
    } else if (error.response?.status === 500) {
      this.ui.error('Server error. Please try again later.');
    } else if (error.code === 'ECONNREFUSED') {
      this.ui.error('Cannot connect to service. Please check your network connection.');
    } else if (error.code === 'ETIMEDOUT') {
      this.ui.error('Request timed out. Please try again.');
    } else {
      this.ui.error(error.message || 'An unknown error occurred.');
    }

    process.exit(1);
  }
}
