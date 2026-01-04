# Straion CLI

A command-line tool for importing documents from external platforms (Confluence) into the Straion platform.

## Features

- Import Confluence pages into Straion
- List pages from Confluence spaces
- Track import status
- Manage authentication credentials securely
- Get space information

## Installation

### Prerequisites

- Node.js 20.x or higher
- pnpm (or npm/yarn)

### Setup

1. Clone the repository and navigate to the CLI directory:
```bash
cd apps/cli
```

2. Install dependencies:
```bash
pnpm install
```

3. Build the project:
```bash
pnpm build
```

4. (Optional) Link the CLI globally for development:
```bash
npm link
```

## Configuration

Before using the CLI, you need to configure your credentials:

```bash
straion auth
```

This will prompt you for:
- **Straion API endpoint** (e.g., `http://localhost:3000`)
- **Straion API key**
- **Confluence credentials** (optional):
  - Base URL (e.g., `https://your-domain.atlassian.net`)
  - Email
  - API token

Configuration is stored securely in `~/.straion/config.json`.

### Getting Confluence API Token

1. Go to [https://id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click "Create API token"
3. Give it a label and copy the generated token

## Usage

### Authentication

Configure or update your credentials:

```bash
straion auth
```

### Import a Confluence Page

Import a specific Confluence page by its ID:

```bash
straion import --source confluence --page-id <PAGE_ID>
```

Example:
```bash
straion import --source confluence --page-id 123456789
```

### Check Import Status

Check the status of a previously submitted import:

```bash
straion status <IMPORT_ID>
```

Example:
```bash
straion status abc123def456
```

### List Pages in a Space

List all pages in a Confluence space:

```bash
straion list --source confluence --space-id <SPACE_ID>
```

Example:
```bash
straion list --source confluence --space-id 98765432
```

### Get Space Information

Get detailed information about a Confluence space:

```bash
straion space --key <SPACE_KEY>
```

Example:
```bash
straion space --key MYSPACE
```

## Commands Reference

| Command | Description | Options |
|---------|-------------|---------|
| `auth` | Configure authentication credentials | None |
| `import` | Import documents from external platforms | `-s, --source <platform>` (required)<br>`--page-id <id>` (required) |
| `status <import-id>` | Check the status of an import | `<import-id>` (required) |
| `list` | List available documents from a source | `-s, --source <platform>` (required)<br>`--space-id <id>` (required) |
| `space` | Get Confluence space information | `--key <key>` (required) |

## Development

### Project Structure

```
src/
├── cli.ts                    # Main CLI entry point
├── commands/                 # Command implementations
│   ├── auth.ts              # Authentication configuration
│   ├── import.ts            # Import command
│   ├── list.ts              # List command
│   ├── space.ts             # Space command
│   └── status.ts            # Status command
├── integrations/            # External platform integrations
│   └── index.ts        # Confluence API client
└── utils/                   # Utilities
    └── config.ts            # Configuration management
```

### Build

Compile TypeScript to JavaScript:

```bash
pnpm build
```

### Clean

Remove build artifacts:

```bash
pnpm clean
```

## Error Handling

The CLI provides helpful error messages for common issues:

- **Authentication errors**: Prompts you to run `straion auth`
- **Connection errors**: Checks if the Straion service is running
- **Not found errors**: Validates page IDs and space keys
- **Configuration errors**: Ensures all required credentials are set

## Security

- Credentials are stored with restricted permissions (0600) in `~/.straion/config.json`
- The config directory has restricted permissions (0700)
- API tokens are never logged or displayed
- Passwords are masked during input

## Troubleshooting

### "Straion endpoint not configured"
Run `straion auth` to configure your credentials.

### "Confluence credentials not configured"
Run `straion auth` and select to configure Confluence integration.

### "Cannot connect to Straion service"
Ensure the Straion import service is running:
```bash
docker-compose up -d
```

### "Page not found in Confluence"
Verify the page ID is correct and you have access to it in Confluence.

## License

MIT
