const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
require('dotenv').config({ path: path.resolve(__dirname, '../', envFile) });

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Database Connection Test
const prisma = require('./lib/prisma');

app.get('/', async (req, res) => {
    try {
        await prisma.$connect();
        res.json({ message: 'Welcome to Skill Shiksha Backend API', dbStatus: 'Connected' });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
