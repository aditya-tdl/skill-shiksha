import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import admissionRoutes from './routes/admissionRoutes.js';
import authRoutes from './routes/authRoutes.js';
import internshipRoutes from './routes/internshipRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// API Routes
app.use('/api/admission', admissionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/internships', internshipRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Skill Shiksha MongoDB API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
