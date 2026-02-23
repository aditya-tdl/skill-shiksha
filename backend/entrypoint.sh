#!/bin/sh
set -e

echo "🚀 Starting House of DE Backend..."

# Step 1: Initialize database (create if not exists + schemas)
echo "📦 Running database initialization..."
node src/scripts/init-db.js

# Step 2: Sync database schema
echo "📦 Syncing database schema..."
npx prisma db push

# Step 3: Start the server
echo "🎉 Starting server..."
node src/server.js
