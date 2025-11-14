# Multi-stage build with Node backend

# Stage 1: Build Frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and build
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Stage 2: Production with Node
FROM node:20-alpine AS production

WORKDIR /app

# Copy production package.json
COPY package-production.json ./package.json

# Install production dependencies
RUN npm install --production && npm cache clean --force

# Copy built frontend from builder
COPY --from=builder /app/dist ./dist

# Copy production server
COPY server-production.js ./

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Expose port
EXPOSE 80

# Environment variables (can be overridden)
ENV PORT=80
ENV SMTP_HOST=smtp.gmail.com
ENV SMTP_PORT=587

# Start Node server
CMD ["node", "server-production.js"]

