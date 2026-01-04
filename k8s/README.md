# Kubernetes Deployment

Kubernetes manifests for deploying the Straion Import Service.

## Prerequisites

- Kubernetes cluster (minikube, kind, GKE, EKS, AKS, etc.)
- kubectl configured to access your cluster
- Docker for building images

## Quick Start

### 1. Build Docker Images

```bash
# From the monorepo root

# Build import-service
docker build -t straion-import-service:latest -f apps/import-service/Dockerfile .

# Build parser-worker
docker build -t straion-parser-worker:latest -f apps/parser-worker/Dockerfile .
```

For local Kubernetes (minikube/kind):
```bash
# Minikube
minikube image load straion-import-service:latest
minikube image load straion-parser-worker:latest

# Kind
kind load docker-image straion-import-service:latest
kind load docker-image straion-parser-worker:latest
```

### 2. Create Secrets

```bash
# Create API secrets
kubectl create secret generic api-secrets \
  --from-literal=anthropic-key=$ANTHROPIC_API_KEY

# Or use the template
cp k8s/secret.yaml.template k8s/secret.yaml
# Edit k8s/secret.yaml with your actual values
kubectl apply -f k8s/secret.yaml
```

### 3. Deploy to Kubernetes

Deploy in order to ensure dependencies are ready:

```bash
# From the monorepo root

# 1. Deploy ConfigMap and Secrets first
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml  # If using yaml instead of kubectl create

# 2. Deploy infrastructure (Zookeeper and Kafka)
kubectl apply -f k8s/zookeeper.yaml
kubectl apply -f k8s/kafka.yaml

# Wait for Kafka to be ready
kubectl wait --for=condition=ready pod -l app=kafka --timeout=300s

# 3. Deploy application services
kubectl apply -f k8s/deployment.yaml  # import-service
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/parser-worker.yaml
```

This will create:
- **Zookeeper**: StatefulSet with persistent storage (required for Kafka)
- **Kafka**: StatefulSet with persistent storage (message broker)
- **Import Service**: Deployment with 2 replicas (API gateway)
- **Parser Worker**: Deployment with 2 replicas (Claude AI parser)
- **Services**: LoadBalancer for import-service, headless services for Kafka/Zookeeper
- **ConfigMap**: Environment configuration
- **Secrets**: Anthropic API key

### 4. Verify Deployment

```bash
# Check all pods
kubectl get pods

# Expected output:
# - zookeeper-0 (Running)
# - kafka-0 (Running)
# - straion-import-service-xxx (2 pods Running)
# - straion-parser-worker-xxx (2 pods Running)

# Check services
kubectl get svc

# View logs for each component
kubectl logs -l app=kafka --tail=20
kubectl logs -l app=straion-import-service --tail=20
kubectl logs -l app=straion-parser-worker --tail=20 -f

# Check import-service health
kubectl port-forward svc/straion-import-service 3000:80
curl http://localhost:3000/health

# Verify Kafka topics (exec into kafka pod)
kubectl exec -it kafka-0 -- kafka-topics --bootstrap-server localhost:9092 --list
# Should eventually show: document.fetched, document.parsed, document.failed
```

## Architecture

The Kubernetes deployment includes the complete event-driven architecture:

```
┌─────────────┐    HTTP     ┌───────────────┐    Kafka     ┌──────────────┐
│   CLI       │────────────>│ Import Service│─────────────>│Parser Worker │
│             │             │ (LoadBalancer)│              │ (2 replicas) │
└─────────────┘             └───────────────┘              └──────────────┘
                                    │                               │
                                    ▼                               ▼
                            ┌───────────────┐              ┌──────────────┐
                            │  Kafka Broker │              │  Parsed ADRs │
                            │ (StatefulSet) │              │              │
                            │  • fetched    │              └──────────────┘
                            │  • parsed     │
                            │  • failed     │
                            └───────────────┘
                                    │
                                    ▼
                            ┌───────────────┐
                            │  Zookeeper    │
                            │ (StatefulSet) │
                            └───────────────┘
```

## Manifests

### Infrastructure
- `zookeeper.yaml` - Zookeeper StatefulSet and Service (required for Kafka)
- `kafka.yaml` - Kafka StatefulSet and Services (message broker)

### Application Services
- `deployment.yaml` - Import Service deployment with 2 replicas (API gateway)
- `parser-worker.yaml` - Parser Worker deployment with 2 replicas (Claude AI)
- `service.yaml` - LoadBalancer service for import-service exposing port 80

### Auto-Scaling (Optional)
- `parser-worker-hpa.yaml` - CPU/Memory-based Horizontal Pod Autoscaler
- `parser-worker-keda.yaml` - KEDA Kafka lag-based ScaledObject (requires KEDA)

### Configuration
- `configmap.yaml` - Configuration values (non-sensitive)
- `secret.yaml.template` - Template for sensitive data (Anthropic API key)

## Configuration

### Environment Variables

Edit `configmap.yaml` to modify:
- `NODE_ENV` - Environment (production/development)
- `LOG_LEVEL` - Logging level (info/debug/error)
- `GCS_BUCKET_NAME` - Google Cloud Storage bucket name

### Secrets

Required secrets (via `api-secrets`):
- `anthropic-key` - Claude API key for document parsing

### Resource Limits

Current settings:
- **Requests**: 256Mi memory, 250m CPU
- **Limits**: 512Mi memory, 500m CPU

Adjust in `deployment.yaml` based on your needs.

## Scaling

### Manual Scaling

```bash
# Scale import-service (API gateway)
kubectl scale deployment straion-import-service --replicas=5

# Scale parser-worker (processing throughput)
kubectl scale deployment straion-parser-worker --replicas=10

# Scale Kafka brokers (for high availability)
kubectl scale statefulset kafka --replicas=3
# Note: Also update KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR in kafka.yaml
```

### Horizontal Pod Autoscaler

```bash
# Auto-scale import-service based on CPU
kubectl autoscale deployment straion-import-service \
  --cpu-percent=70 \
  --min=2 \
  --max=10

# Auto-scale parser-worker based on CPU
kubectl autoscale deployment straion-parser-worker \
  --cpu-percent=80 \
  --min=2 \
  --max=20
```

### Scaling Considerations

- **Parser Workers**: Scale based on Kafka consumer lag and parsing throughput
- **Import Service**: Scale based on HTTP request rate
- **Kafka**: For production, use 3+ replicas for high availability
- **Zookeeper**: For production, use 3 or 5 replicas (odd numbers)

## Advanced Auto-Scaling

### Option 1: CPU/Memory-based HPA (Simple)

Use the built-in Horizontal Pod Autoscaler for CPU/memory-based scaling:

```bash
# Deploy HPA for parser-worker
kubectl apply -f k8s/parser-worker-hpa.yaml

# Check HPA status
kubectl get hpa straion-parser-worker-hpa
```

**Features:**
- Scales based on CPU (70%) and memory (80%) utilization
- Min 2 replicas, max 20 replicas
- Fast scale-up (doubles every 30s), gradual scale-down (50% per minute)
- Works out-of-the-box, no additional tools needed

**When to use:** Quick setup, scales based on resource usage as proxy for load

### Option 2: KEDA Kafka Lag-based Scaling (Production)

Use KEDA for event-driven autoscaling based on actual Kafka consumer lag:

```bash
# 1. Install KEDA (one-time setup)
kubectl apply -f https://github.com/kedacore/keda/releases/download/v2.12.0/keda-2.12.0.yaml

# 2. Deploy KEDA ScaledObject for parser-worker
kubectl apply -f k8s/parser-worker-keda.yaml

# 3. Check scaling status
kubectl get scaledobject straion-parser-worker-scaler
kubectl get hpa  # KEDA creates an HPA automatically
```

**Features:**
- Scales based on Kafka consumer lag (pending messages)
- Threshold: 10 messages per pod (adjustable)
- Min 2 replicas, max 20 replicas
- Polls Kafka every 30 seconds
- Can scale to zero when no messages (set minReplicaCount: 0)

**When to use:** Production environments where you want precise scaling based on actual message queue depth

**Configuration:**
- `lagThreshold: "10"` - Scale up when lag > 10 messages per pod
- `consumerGroup: parser-workers` - Monitor this consumer group
- `topic: document.fetched` - Watch this topic's lag

### Comparing the Approaches

| Feature | HPA (CPU-based) | KEDA (Kafka lag) |
|---------|-----------------|------------------|
| **Setup** | Simple | Requires KEDA installation |
| **Scaling metric** | CPU/Memory | Kafka consumer lag |
| **Accuracy** | Indirect (resource usage) | Direct (message count) |
| **Response time** | Reactive | Proactive |
| **Scale to zero** | No (min 1) | Yes (if configured) |
| **Best for** | Quick setup, dev/test | Production, cost optimization |

### Monitoring Parser Worker Scaling

```bash
# Watch HPA in action
kubectl get hpa -w

# Check current consumer lag
kubectl exec -it kafka-0 -- kafka-consumer-groups \
  --bootstrap-server localhost:9092 \
  --group parser-workers \
  --describe

# View parser-worker pod count over time
kubectl get pods -l app=straion-parser-worker -w

# Check KEDA metrics (if using KEDA)
kubectl get scaledobject straion-parser-worker-scaler -o yaml
```

## Updating

```bash
# Rebuild images (from monorepo root)
docker build -t straion-import-service:v2 -f apps/import-service/Dockerfile .
docker build -t straion-parser-worker:v2 -f apps/parser-worker/Dockerfile .

# For local Kubernetes, reload images
minikube image load straion-import-service:v2
minikube image load straion-parser-worker:v2

# Update deployments
kubectl set image deployment/straion-import-service \
  import-service=straion-import-service:v2

kubectl set image deployment/straion-parser-worker \
  parser-worker=straion-parser-worker:v2

# Or re-apply all manifests
kubectl apply -f k8s/
```

## Troubleshooting

### Pods not starting

```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name>

# Common issues:
# - Kafka not ready: Wait for Kafka to be Running before deploying app services
# - Image not found: Make sure to load images into minikube/kind
# - Secrets missing: Ensure api-secrets is created with anthropic-key
```

### Kafka connection issues

```bash
# Check Kafka is running
kubectl get pods -l app=kafka

# Check Kafka logs
kubectl logs kafka-0 --tail=50

# Test Kafka connection from parser-worker
kubectl exec -it <parser-worker-pod> -- sh
# Then try: nc -zv kafka 9092
```

### Parser workers not processing

```bash
# Check parser worker logs
kubectl logs -l app=straion-parser-worker --tail=50 -f

# Check if Anthropic API key is set
kubectl get secret api-secrets -o jsonpath='{.data.anthropic-key}' | base64 -d

# Check Kafka consumer group
kubectl exec -it kafka-0 -- kafka-consumer-groups \
  --bootstrap-server localhost:9092 \
  --group parser-workers \
  --describe
```

### Service not accessible

```bash
kubectl get svc straion-import-service
kubectl describe svc straion-import-service

# For minikube
minikube service straion-import-service --url
```

### Health check failing

```bash
kubectl exec -it <pod-name> -- sh
wget -qO- http://localhost:3000/health
```

## Cleanup

```bash
# Delete all resources
kubectl delete -f k8s/

# Or delete individually in reverse order
kubectl delete -f k8s/parser-worker.yaml
kubectl delete -f k8s/deployment.yaml
kubectl delete -f k8s/service.yaml
kubectl delete -f k8s/kafka.yaml
kubectl delete -f k8s/zookeeper.yaml
kubectl delete -f k8s/configmap.yaml
kubectl delete secret api-secrets

# Note: PersistentVolumeClaims for Kafka and Zookeeper are not automatically deleted
# Delete them manually if needed:
kubectl delete pvc --all
```
