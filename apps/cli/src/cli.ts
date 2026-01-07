#!/usr/bin/env node

import { Command } from 'commander';
import { importCommand } from './commands/import';
import { authCommand } from './commands/auth';
import { listCommand } from './commands/list';
import { statusCommand } from './commands/status';
import { spaceCommand } from './commands/space';
import { spacesCommand } from './commands/spaces';

const program = new Command();

program
  .name('straion')
  .description('Document import tool for Straion platform')
  .version('1.0.0');

program
  .command('import')
  .description('Import documents from external platforms')
  .option('-s, --source <platform>', 'Source platform (confluence, gdocs)')
  .option('--space-key <key>', 'Confluence space key')
  .option('--page-id <id>', 'Page ID to import')
  .action(importCommand);

program
  .command('status <import-id>')
  .description('Check the status of an import')
  .action(statusCommand);

program
  .command('auth')
  .description('Configure authentication credentials')
  .action(authCommand);

program
  .command('list')
  .description('List available documents from a source')
  .option('-s, --source <platform>', 'Source platform (confluence, gdocs)')
  .option('--space-id <spaceId>', 'Confluence space key')
  .action(listCommand);

program
  .command('space')
  .description('Get Confluence space information by key')
  .option('--key <spaceId>', 'Confluence space key')
  .action(spaceCommand);

program
  .command('spaces')
  .description('List all available Confluence spaces')
  .action(spacesCommand);

program.parse();
