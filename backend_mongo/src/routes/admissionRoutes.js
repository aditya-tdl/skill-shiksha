import express from 'express';
import {
    registerAdmission,
    getAdmissions,
    getAdmissionById,
    updateAdmission,
    deleteAdmission
} from '../controllers/admissionController.js';
import { protect, admin } from '../utils/authMiddleware.js';

const router = express.Router();

// @route   POST /api/admission/register
// @desc    Register a new student admission
// @access  Public
router.post('/register', registerAdmission);

// @route   GET /api/admission
// @desc    Get all student admissions
// @access  Private/Admin
router.get('/', protect, admin, getAdmissions);

// @route   GET /api/admission/:id
// @desc    Get a specific student admission
// @access  Private/Admin
router.get('/:id', protect, admin, getAdmissionById);

// @route   PUT /api/admission/:id
// @desc    Update a specific student admission
// @access  Private/Admin
router.put('/:id', protect, admin, updateAdmission);

// @route   DELETE /api/admission/:id
// @desc    Delete a specific student admission
// @access  Private/Admin
router.delete('/:id', protect, admin, deleteAdmission);

export default router;
