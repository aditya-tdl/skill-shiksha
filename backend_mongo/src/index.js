import dotenv from 'dotenv';
dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development' });

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import admissionRoutes from './routes/admissionRoutes.js';
import authRoutes from './routes/authRoutes.js';
import internshipRoutes from './routes/internshipRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import AppError from './utils/AppError.js';
import globalErrorHandler from './controllers/errorController.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Connect Database
connectDB();

// API Routes
app.use('/api/admission', admissionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Skill Shiksha MongoDB API is running!');
});

// Handle unhandled routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handling Middleware
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
