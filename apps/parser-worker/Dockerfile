FROM node:20-alpine AS builder

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps/parser-worker ./apps/parser-worker

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install

# Build the application
WORKDIR /app/apps/parser-worker
RUN pnpm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy workspace files for production
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps/parser-worker/package.json ./apps/parser-worker/

# Install pnpm and production dependencies
RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

# Copy built application
COPY --from=builder /app/apps/parser-worker/dist ./apps/parser-worker/dist

WORKDIR /app/apps/parser-worker

CMD ["node", "dist/main.js"]
