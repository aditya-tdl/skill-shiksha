const { PrismaClient } = require('@prisma/client');
const path = require('path');

// Load env
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
const envPath = path.resolve(__dirname, envFile);

console.log('Loading env from:', envPath);
require('dotenv').config({ path: envPath });

console.log('DATABASE_URL:', process.env.DATABASE_URL);

try {
    const prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    });
    console.log('PrismaClient instantiated');

    prisma.$connect()
        .then(() => {
            console.log('Successfully connected to database');
            process.exit(0);
        })
        .catch((e) => {
            console.error('Connection failed:', e.message);
            process.exit(1);
        });
} catch (e) {
    console.error('Initialization failed:', e.message);
    process.exit(1);
}
