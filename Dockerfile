FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Nuxt app
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/.output .output
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Set environment variable
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Run the Nuxt app
CMD ["node", ".output/server/index.mjs"]