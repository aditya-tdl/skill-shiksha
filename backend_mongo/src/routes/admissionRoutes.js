import express from 'express';
import {
    registerAdmission,
    getAdmissions,
    getAdmissionById,
    updateAdmission,
    deleteAdmission
} from '../controllers/admissionController.js';

const router = express.Router();

// @route   POST /api/admission/register
// @desc    Register a new student admission
// @access  Public
router.post('/register', registerAdmission);

// @route   GET /api/admission
// @desc    Get all student admissions
// @access  Public
router.get('/', getAdmissions);

// @route   GET /api/admission/:id
// @desc    Get a specific student admission
// @access  Public
router.get('/:id', getAdmissionById);

// @route   PUT /api/admission/:id
// @desc    Update a specific student admission
// @access  Public
router.put('/:id', updateAdmission);

// @route   DELETE /api/admission/:id
// @desc    Delete a specific student admission
// @access  Public
router.delete('/:id', deleteAdmission);

export default router;
