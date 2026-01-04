FROM node:20-alpine AS builder

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps/import-service ./apps/import-service

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install

# Build the application
WORKDIR /app/apps/import-service
RUN pnpm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy workspace files for production
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps/import-service/package.json ./apps/import-service/

# Install pnpm and production dependencies
RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

# Copy built application
COPY --from=builder /app/apps/import-service/dist ./apps/import-service/dist

WORKDIR /app/apps/import-service

EXPOSE 3000

CMD ["node", "dist/main.js"]
