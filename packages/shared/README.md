# @straion/shared

Shared TypeScript types, interfaces, constants, and utilities used across the Straion monorepo.

## Installation

This package is part of the monorepo and should be referenced using workspace protocol:

```json
{
  "dependencies": {
    "@straion/shared": "workspace:*"
  }
}
```

## Usage

### Types

```typescript
import { ADR, DocumentSource, ImportResult } from '@straion/shared';

const adr: ADR = {
  title: 'Use microservices architecture',
  context: 'We need to scale our application...',
  decision: 'We will adopt a microservices architecture...',
  consequences: 'This will improve scalability but increase complexity...',
};
```

### Constants

```typescript
import { API_ENDPOINTS, ERROR_CODES } from '@straion/shared';

console.log(API_ENDPOINTS.IMPORT); // '/import'
```

### Utilities

```typescript
import { isValidDocumentSource, sanitizeFileName } from '@straion/shared';

if (isValidDocumentSource('confluence')) {
  // Valid source
}

const fileName = sanitizeFileName('My Document.pdf'); // 'my-document-pdf'
```

## Exports

- **Types**: Common interfaces and enums
- **Constants**: Configuration values, error codes, endpoints
- **Utils**: Helper functions for validation and formatting

## Development

```bash
pnpm build
pnpm dev  # Watch mode
```
