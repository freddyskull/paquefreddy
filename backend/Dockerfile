# Dockerfile para backend NestJS (Desarrollo con hot reload)
FROM node:20-alpine

# Install required dependencies for Prisma
RUN apk add --no-cache openssl postgresql-client

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/
COPY entrypoint.sh ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Install NestJS CLI globally
RUN npm install -g @nestjs/cli

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Expose port used by NestJS
EXPOSE 3001

# Ensure entrypoint is executable and use it
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
