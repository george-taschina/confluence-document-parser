# Architecture

## Overview

This is an event-driven document import and transformation platform built on microservices architecture. The system imports documents from external sources (Confluence, Google Docs, etc.) and transforms them into Architecture Decision Records (ADRs) using Claude AI for intelligent parsing.

### Key Design Principles

- **Event-Driven Architecture**: Asynchronous message processing via Kafka for scalability and resilience
- **Microservices**: Loosely coupled services with single responsibilities
- **Cloud-Native**: Designed for Kubernetes with horizontal auto-scaling capabilities
- **Separation of Concerns**: Clear boundaries between ingestion, processing, and storage

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         External Systems                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │  Confluence  │  │ Google Docs  │  │  Other APIs  │                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
└─────────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ HTTP/REST
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         Application Layer                                │
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                      CLI (Command Line)                            │  │
│  │  - User authentication                                             │  │
│  │  - Document submission                                             │  │
│  │  - Import status tracking                                          │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                  │                                        │
│                                  │ HTTP POST                              │
│                                  ▼                                        │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │              Import Service (API Gateway)                          │  │
│  │                                                                     │  │
│  │  - Request validation & authentication                             │  │
│  │  - Document fetching from external sources                         │  │
│  │  - Kafka producer (publishes to topics)                            │  │
│  │  - Import tracking & status management                             │  │
│  │  - RESTful API endpoints                                           │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                  │                                        │
└──────────────────────────────────┼────────────────────────────────────────┘
                                  │
                                  │ Kafka Event
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        Message Layer (Kafka)                             │
│                                                                           │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                      Kafka Broker                                 │   │
│  │                                                                    │   │
│  │  Topics:                                                          │   │
│  │  • document.fetched  - Raw documents ready for parsing            │   │
│  │  • document.parsed   - Successfully parsed ADRs                   │   │
│  │  • document.failed   - Failed processing (DLQ)                    │   │
│  │                                                                    │   │
│  │  Consumer Groups:                                                 │   │
│  │  • parser-workers    - Parser service instances                   │   │
│  │  • storage-workers   - Storage service instances                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                  │                                        │
└──────────────────────────────────┼────────────────────────────────────────┘
                                  │
                                  │ Kafka Consumer
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        Processing Layer                                  │
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │              Parser Worker (Consumer)                              │  │
│  │                                                                     │  │
│  │  - Consumes from document.fetched topic                           │  │
│  │  - Parses documents using Claude AI (Anthropic API)               │  │
│  │  - Extracts ADR structure (Title, Context, Decision, Consequences)│  │
│  │  - Publishes to document.parsed or document.failed                │  │
│  │  - Horizontally scalable based on Kafka lag                       │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                  │                                        │
│                                  │ External API                           │
│                                  ▼                                        │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                     Claude AI (Anthropic)                          │  │
│  │  - Natural language processing                                     │  │
│  │  - Document structure analysis                                     │  │
│  │  - ADR format generation                                           │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ Kafka Event
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         Storage Layer                                    │
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │              Storage Worker (Consumer)                             │  │
│  │  - Consumes from document.parsed topic                            │  │
│  │  - Persists ADRs to cloud storage (GCS)                           │  │
│  │  - Manages file organization and metadata                         │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                  │                                        │
│                                  ▼                                        │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │              Google Cloud Storage (GCS)                            │  │
│  │  - Persistent storage for parsed ADRs                             │  │
│  │  - Organized by project/import batch                              │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                    Infrastructure Layer (Kubernetes)                     │
│                                                                           │
│  • Zookeeper: Kafka coordination and metadata management                │
│  • ConfigMaps: Environment configuration                                 │
│  • Secrets: API keys and credentials                                     │
│  • HPA/KEDA: Auto-scaling based on load or Kafka lag                    │
│  • PersistentVolumes: Kafka and Zookeeper data persistence              │
└───────────────────────────────────────────────────────────────────────────┘
```

## Component Details

### 1. CLI (Command Line Interface)

**Technology**: Node.js, Commander.js
**Purpose**: User-facing interface for document imports

**Responsibilities**:
- Authenticate users with Straion API
- Configure source credentials (Confluence, Google Docs)
- Submit import requests with document IDs
- Poll and display import status
- Handle errors and provide user feedback

**Interactions**:
- → Import Service: HTTP POST `/import` with document metadata

### 2. Import Service (API Gateway)

**Technology**: NestJS, TypeScript, Kafka (KafkaJS)
**Deployment**: Kubernetes Deployment (2+ replicas)
**Purpose**: API gateway and orchestration layer

**Responsibilities**:
- **API Management**: RESTful endpoints for import operations
- **Authentication**: Validate API tokens and user permissions
- **Document Fetching**: Retrieve documents from external sources (Confluence API, Google Docs API)
- **Event Publishing**: Publish fetched documents to `document.fetched` topic
- **Import Tracking**: Maintain import status and metadata
- **Error Handling**: Catch and log integration errors

**Key Endpoints**:
- `POST /import` - Submit new import request
- `GET /import/:id` - Check import status
- `GET /health` - Health check

**Scaling Strategy**: Horizontal scaling via Kubernetes HPA based on HTTP request rate

### 3. Kafka Message Broker

**Technology**: Apache Kafka (wurstmeister/kafka)
**Deployment**: Kubernetes StatefulSet (1-3 replicas)
**Purpose**: Event streaming and message queue

**Topics**:

| Topic | Purpose | Producers | Consumers | Retention |
|-------|---------|-----------|-----------|-----------|
| `document.fetched` | Raw documents ready for parsing | Import Service | Parser Workers | 7 days |
| `document.parsed` | Successfully parsed ADRs | Parser Workers | Storage Workers | 7 days |
| `document.failed` | Failed processing attempts (DLQ) | Parser/Storage Workers | Monitoring/Alerts | 30 days |

**Configuration**:
- Replication Factor: 1 (dev), 3 (prod)
- Partitions: Auto-created based on throughput
- Consumer Groups: `parser-workers`, `storage-workers`

### 4. Parser Worker (Consumer)

**Technology**: NestJS, TypeScript, Anthropic SDK, Kafka (KafkaJS)
**Deployment**: Kubernetes Deployment (2-20 replicas)
**Purpose**: AI-powered document parsing

**Responsibilities**:
- **Message Consumption**: Subscribe to `document.fetched` topic
- **AI Parsing**: Send documents to Claude AI for ADR extraction
- **Structure Validation**: Ensure ADR has Title, Context, Decision, Consequences
- **Event Publishing**: Publish to `document.parsed` or `document.failed`
- **Error Handling**: Retry logic with exponential backoff, DLQ after max attempts

**Parsing Flow**:
1. Consume message from Kafka
2. Extract document content and metadata
3. Construct prompt for Claude AI
4. Call Anthropic API with `claude-sonnet-4-20250514` model
5. Parse JSON response into ADR structure
6. Publish result to appropriate topic
7. Commit Kafka offset

**Scaling Strategy**:
- **HPA**: CPU/Memory-based (70% CPU threshold)
- **KEDA**: Kafka lag-based (10 messages per pod threshold)

**Performance Characteristics**:
- Throughput: ~5-10 documents/minute per pod (depends on document size)
- Latency: 2-5 seconds per document (Claude API response time)

### 5. Storage Worker (Consumer)

**Technology**: NestJS, TypeScript, Google Cloud Storage SDK
**Deployment**: Kubernetes Deployment (1-5 replicas)
**Purpose**: Persist parsed ADRs to cloud storage

**Responsibilities**:
- Consume from `document.parsed` topic
- Format ADRs as markdown files
- Upload to Google Cloud Storage
- Organize by project/batch structure
- Handle storage failures with retries

### 6. Zookeeper

**Technology**: Apache Zookeeper (wurstmeister/zookeeper)
**Deployment**: Kubernetes StatefulSet (1-5 replicas)
**Purpose**: Kafka coordination and metadata management

**Responsibilities**:
- Kafka broker coordination
- Topic and partition metadata
- Consumer group offsets (in older Kafka versions)
- Leader election for Kafka partitions

## Data Flow

### End-to-End Import Flow

```
1. User submits import request
   └─> CLI sends POST /import to Import Service

2. Import Service validates & fetches document
   ├─> Validates API token
   ├─> Fetches document from Confluence/Google Docs
   └─> Publishes to document.fetched topic

3. Parser Worker processes document
   ├─> Consumes message from document.fetched
   ├─> Sends content to Claude AI API
   ├─> Parses JSON response into ADR structure
   └─> Publishes to document.parsed or document.failed

4. Storage Worker persists ADR
   ├─> Consumes message from document.parsed
   ├─> Formats as markdown
   └─> Uploads to Google Cloud Storage

5. User checks status
   └─> CLI polls GET /import/:id endpoint
```

### Message Format

**document.fetched**:
```json
{
  "importId": "uuid-v4",
  "source": "confluence",
  "documentId": "page-123",
  "title": "Architecture Decision: Use Microservices",
  "content": "<html>...</html>",
  "metadata": {
    "author": "user@example.com",
    "createdAt": "2025-01-01T00:00:00Z"
  },
  "timestamp": "2025-01-04T12:00:00Z"
}
```

**document.parsed**:
```json
{
  "importId": "uuid-v4",
  "adr": {
    "title": "Use Microservices Architecture",
    "context": "We need to scale our system independently...",
    "decision": "We will adopt a microservices architecture...",
    "consequences": "Better scalability but increased complexity..."
  },
  "metadata": {
    "source": "confluence",
    "documentId": "page-123",
    "parsedAt": "2025-01-04T12:00:05Z"
  }
}
```

**document.failed**:
```json
{
  "importId": "uuid-v4",
  "error": {
    "stage": "parsing",
    "message": "Claude API timeout",
    "code": "UPSTREAM_TIMEOUT",
    "retryCount": 3
  },
  "originalMessage": { /* original document.fetched payload */ },
  "timestamp": "2025-01-04T12:01:00Z"
}
```

## Communication Patterns

### Synchronous Communication (HTTP)
- CLI ↔ Import Service: REST API for import requests and status checks
- Import Service ↔ External APIs: Fetch documents from Confluence/Google Docs
- Parser Worker ↔ Claude AI: AI parsing requests

### Asynchronous Communication (Kafka)
- Import Service → Parser Worker: Document processing queue
- Parser Worker → Storage Worker: Parsed document persistence
- All Workers → Monitoring: Error and failed message topics

## Scalability & Resilience

### Horizontal Scaling

| Component | Scaling Strategy | Trigger | Min | Max |
|-----------|------------------|---------|-----|-----|
| Import Service | Kubernetes HPA | CPU > 70% | 2 | 10 |
| Parser Worker | KEDA (Kafka lag) | Lag > 10 msgs/pod | 2 | 20 |
| Storage Worker | Manual/HPA | CPU > 70% | 1 | 5 |
| Kafka Broker | Manual | Partition load | 1 | 3 |
| Zookeeper | Manual | N/A | 1 | 5 |

### Resilience Patterns

**1. Dead Letter Queue (DLQ)**
- Failed messages → `document.failed` topic after 3 retries
- Prevents message loss and enables post-mortem analysis

**2. Circuit Breaker**
- Claude API failures trigger backoff
- Prevents cascading failures

**3. Idempotency**
- Import IDs ensure duplicate requests are handled gracefully
- Kafka offset commits only after successful processing

**4. Data Persistence**
- Kafka: PersistentVolumes for message durability
- Zookeeper: PersistentVolumes for metadata
- GCS: Durable object storage for ADRs

**5. Health Checks**
- Kubernetes liveness/readiness probes
- Kafka topic availability checks
- External API health monitoring

## Technology Stack

### Backend Services
- **Framework**: NestJS 10+
- **Language**: TypeScript 4.9+
- **Runtime**: Node.js 20+

### Message Broker
- **Kafka**: Apache Kafka 3.x
- **Client**: KafkaJS 2.x
- **Coordination**: Apache Zookeeper 3.9

### AI/ML
- **Provider**: Anthropic Claude AI
- **Model**: claude-sonnet-4-20250514
- **SDK**: @anthropic-ai/sdk

### Storage
- **Cloud Storage**: Google Cloud Storage
- **SDK**: @google-cloud/storage

### Infrastructure
- **Orchestration**: Kubernetes 1.28+
- **Container Runtime**: Docker
- **Auto-scaling**: Kubernetes HPA, KEDA 2.12
- **Package Manager**: pnpm (monorepo)

### Development Tools
- **CLI Framework**: Commander.js
- **API Client**: Axios
- **Configuration**: dotenv, ConfigModule
- **Testing**: Jest, Supertest

## Deployment Architecture

### Kubernetes Resources

**StatefulSets**:
- Kafka (1-3 replicas, persistent storage)
- Zookeeper (1-5 replicas, persistent storage)

**Deployments**:
- Import Service (2-10 replicas)
- Parser Worker (2-20 replicas, KEDA-scaled)
- Storage Worker (1-5 replicas)

**Services**:
- Import Service: LoadBalancer (external access)
- Kafka: Headless + ClusterIP (internal only)
- Zookeeper: Headless (internal only)

**ConfigMaps**:
- Environment configuration (NODE_ENV, LOG_LEVEL, etc.)

**Secrets**:
- ANTHROPIC_API_KEY
- GCS credentials
- Source API tokens

**PersistentVolumeClaims**:
- Kafka data (5Gi per replica)
- Zookeeper data (1Gi) and logs (1Gi)

### Resource Allocation

| Service | CPU Request | CPU Limit | Memory Request | Memory Limit |
|---------|-------------|-----------|----------------|--------------|
| Import Service | 250m | 500m | 256Mi | 512Mi |
| Parser Worker | 500m | 1000m | 512Mi | 1Gi |
| Storage Worker | 250m | 500m | 256Mi | 512Mi |
| Kafka | 500m | 1000m | 512Mi | 1Gi |
| Zookeeper | 250m | 500m | 256Mi | 512Mi |

## Security Considerations

### Authentication & Authorization
- API token-based authentication for CLI
- Service-to-service communication within cluster (no auth required)
- External API credentials stored in Kubernetes Secrets

### Data Protection
- Documents in transit: HTTPS for external APIs
- Documents at rest: GCS encryption
- Kafka messages: Plaintext (within cluster network)

### Secret Management
- Kubernetes Secrets for sensitive data
- Separate secrets per environment (dev/staging/prod)
- No secrets in source code or Docker images

### Network Security
- Import Service: External LoadBalancer
- All other services: ClusterIP (internal only)
- Kafka: Not exposed externally

## Monitoring & Observability

### Logging
- Structured JSON logs from all services
- Log levels: info, warn, error
- Centralized logging with `kubectl logs`

### Metrics (Future)
- Kafka consumer lag
- Parser throughput (docs/minute)
- Claude API latency
- Import success/failure rate

### Health Checks
- HTTP `/health` endpoint on Import Service
- TCP probes for Kafka (port 9092)
- Readiness/liveness probes on all pods

## Future Enhancements

### Planned Features
1. **Database Layer**: PostgreSQL for import metadata and status tracking
2. **API Rate Limiting**: Protect against abuse
3. **Batch Processing**: Support multiple documents in single import
4. **Webhook Notifications**: Alert on import completion/failure
5. **Advanced Parsing**: Support for images, tables, code blocks in ADRs
6. **Multi-tenancy**: Separate workspaces for different teams
7. **Audit Log**: Track all import activities
8. **Prometheus Metrics**: Production-grade observability

### Scalability Roadmap
- Multi-region deployment
- Kafka partition optimization
- Read replicas for status API
- CDN for static assets
- Cache layer (Redis) for frequently accessed data
