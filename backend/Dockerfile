# Use Node.js 20 LTS (required by Prisma 7+ and AWS SDK v3)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy prisma schema
COPY prisma ./prisma

# Generate Prisma client (db push runs at runtime via entrypoint.sh)
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Make entrypoint executable
RUN chmod +x entrypoint.sh

# Expose port
EXPOSE 5000

# Start command (runs init-db, migrations, then server)
CMD ["sh", "entrypoint.sh"]
