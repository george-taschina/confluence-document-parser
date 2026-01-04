# Straion Document Import System

A monorepo containing a complete document import system for importing and parsing documents from Confluence into structured ADR (Architecture Decision Record) format using AI.

## Architecture

```
┌─────────────────┐
│  Straion CLI    │ (User's machine)
│  $ straion      │
│  import         │
└────────┬────────┘
         │
         │ HTTPS/REST API
         ▼
┌─────────────────────────────────────┐
│   Import Service (NestJS)          │
│   - REST API Gateway                │
│   - Confluence Integration          │
│   - Import orchestration            │
│   - Status tracking                 │
└────────┬────────────────────────────┘
         │
         │ Kafka Messages
         ▼
┌─────────────────────────────────────┐
│   Apache Kafka + Zookeeper         │
│   - Message broker                  │
│   - Topic: parse.document           │
└────────┬────────────────────────────┘
         │
         │ Kafka Consumer
         ▼
┌─────────────────────────────────────┐
│   Parser Worker (NestJS)           │
│   - Consumes parse tasks            │
│   - AI parsing (Claude API)         │
│   - Document transformation         │
└─────────────────────────────────────┘
```

**Services:**
1. **Straion CLI** - Command-line interface for users to import documents
2. **Import Service** - REST API that orchestrates imports and publishes to Kafka
3. **Parser Worker** - Microservice that consumes Kafka messages and uses Claude AI to parse documents
4. **Kafka + Zookeeper** - Message broker for asynchronous processing
5. **Kafka UI** - Web UI for monitoring Kafka topics and messages

## Project Structure

```
straion/
├── apps/
│   ├── cli/                    # CLI tool for importing documents
│   ├── import-service/         # NestJS REST API gateway
│   └── parser-worker/          # NestJS microservice for AI parsing
├── packages/
│   └── shared/                 # Shared types and utilities
├── k8s/                        # Kubernetes manifests
├── docker-compose.yml          # Local development setup
└── package.json                # Root package.json
```

## Prerequisites

- Node.js >= 20.0.0
- pnpm >= 8.0.0
- Docker & Docker Compose (for local development)
- Kubernetes cluster (for production deployment)
- Anthropic API key (for Claude AI)

## Quick Start

### 1. Installation

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### 2. Start Local Environment

```bash
# Start all services with Docker Compose
docker-compose up -d

# Services will be available at:
# - Import Service: http://localhost:3000
# - Kafka UI: http://localhost:8080
# - Kafka: localhost:9092
```

### 3. Configure CLI

```bash
# Configure authentication
cd apps/cli
node dist/cli.js auth

# When prompted, enter:
# - Straion endpoint: http://localhost:3000
# - API key: dev-token-12345 (or your production key)
# - Confluence credentials (if importing from Confluence)
```

### 4. Import a Document

```bash
# Import a Confluence page
node dist/cli.js import --source confluence --page-id <PAGE_ID>

# Check import status
node dist/cli.js status <IMPORT_ID>
```

## Packages

### @straion/cli

Command-line tool for importing documents from external platforms.

**Location:** `apps/cli/`

**Features:**
- Import Confluence pages
- List pages from Confluence spaces
- Track import status
- Manage authentication credentials
- Interactive CLI with progress indicators

**Commands:**
- `auth` - Configure authentication credentials
- `import` - Import a document (Confluence only)
- `list` - List available documents from a space
- `space` - Get Confluence space information
- `status` - Check import status

[See detailed CLI documentation](apps/cli/README.md)

### @straion/import-service

NestJS REST API service that orchestrates document imports.

**Location:** `apps/import-service/`

**Features:**
- RESTful API for document imports
- Confluence API integration
- Kafka producer for async processing
- Import status tracking with in-memory store
- Health checks and observability
- Swagger/OpenAPI documentation

**API Endpoints:**
- `POST /import` - Submit document for import
- `GET /import/status/:id` - Get import status
- `GET /health` - Health check

### @straion/parser-worker

NestJS microservice that consumes Kafka messages and parses documents using AI.

**Location:** `apps/parser-worker/`

**Features:**
- Kafka consumer for document parsing tasks
- Claude AI integration for intelligent parsing
- Structured ADR extraction
- Async message processing

**Processing:**
- Consumes from `parse.document` Kafka topic
- Uses Claude API to extract structured data
- Sends results back via Kafka

### @straion/shared

Shared TypeScript types, interfaces, and utilities used across all packages.

**Location:** `packages/shared/`

## Development

### Running Services Locally

```bash
# Start infrastructure (Kafka, Zookeeper)
docker-compose up -d zookeeper kafka kafka-ui

# Start import service in dev mode
cd apps/import-service
pnpm start:dev

# Start parser worker in dev mode (in another terminal)
cd apps/parser-worker
pnpm start:dev

# Build CLI
cd apps/cli
pnpm build
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @straion/cli build
pnpm --filter @straion/import-service build
pnpm --filter @straion/parser-worker build
```

### Monitoring

**Kafka UI:** Access at http://localhost:8080
- View topics and messages
- Monitor consumer groups
- Debug message flow

**Service Logs:**
```bash
# View all logs
docker-compose logs -f

# View specific service
docker-compose logs -f import-service
docker-compose logs -f parser-worker
```

## Environment Variables

### CLI
Configuration is stored in `~/.straion/config.json` after running `straion auth`.

### Import Service
- `NODE_ENV` - Environment (development/production)
- `PORT` - HTTP port (default: 3000)
- `KAFKA_BROKER` - Kafka broker URL (default: kafka:9092)

### Parser Worker
- `NODE_ENV` - Environment (development/production)
- `KAFKA_BROKER` - Kafka broker URL (default: kafka:9092)
- `ANTHROPIC_API_KEY` - Claude API key (required)

## Deployment

### Docker

```bash
# Build import service image
cd apps/import-service
docker build -t straion-import-service:latest .

# Build parser worker image
cd apps/parser-worker
docker build -t straion-parser-worker:latest .
```

### Kubernetes

```bash
# Create secrets
kubectl create secret generic api-secrets \
  --from-literal=anthropic-key=$ANTHROPIC_API_KEY

# Deploy to cluster
kubectl apply -f k8s/

# Check deployment
kubectl get pods -l app=straion
kubectl logs -f deployment/straion-import-service
kubectl logs -f deployment/straion-parser-worker
```

## How It Works

1. **User initiates import** via CLI
2. **CLI sends request** to Import Service REST API
3. **Import Service** validates request and publishes message to Kafka topic `parse.document`
4. **Parser Worker** consumes message from Kafka
5. **Parser Worker** uses Claude AI to parse document into structured ADR format
6. **Parser Worker** publishes result back via Kafka
7. **Import Service** updates import status
8. **User checks status** via CLI

## Current Limitations

- Only Confluence is supported (Google Docs integration is planned but not implemented)
- Import status is stored in-memory (not persistent across restarts)
- No database - all state is ephemeral

## Troubleshooting

### Services won't start
```bash
# Check Docker is running
docker ps

# Restart all services
docker-compose down
docker-compose up -d
```

### Kafka connection errors
```bash
# Check Kafka is healthy
docker-compose ps

# View Kafka logs
docker-compose logs kafka

# Wait for Kafka to be ready (can take 30-60 seconds on first start)
```

### Parser not processing documents
```bash
# Check parser worker logs
docker-compose logs parser-worker

# Verify Anthropic API key is set
echo $ANTHROPIC_API_KEY

# Check Kafka UI for messages in parse.document topic
# Visit http://localhost:8080
```

## License

MIT
