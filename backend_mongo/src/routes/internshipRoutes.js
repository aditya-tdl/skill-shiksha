import express from 'express';
import {
    createInternship,
    getInternships,
    getInternship,
    updateInternship,
    deleteInternship
} from '../controllers/internshipController.js';
import { protect, admin } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/', protect, admin, createInternship);
router.get('/', getInternships);
router.get('/:id', getInternship);
router.put('/:id', protect, admin, updateInternship);
router.delete('/:id', protect, admin, deleteInternship);

export default router;
