import express from 'express';
import { registerAdmin, loginAdmin } from '../controllers/authController.js';

const router = express.Router();

// @route   POST /api/auth/admin/register
router.post('/admin/register', registerAdmin);

// @route   POST /api/auth/admin/login
router.post('/admin/login', loginAdmin);

export default router;
