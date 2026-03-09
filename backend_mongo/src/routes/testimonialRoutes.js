import express from 'express';
import {
    createTestimonial,
    getTestimonials,
    getTestimonial,
    updateTestimonial,
    deleteTestimonial
} from '../controllers/testimonialController.js';
import { protect, admin } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/', protect, admin, createTestimonial);
router.get('/', getTestimonials);
router.get('/:id', getTestimonial);
router.put('/:id', protect, admin, updateTestimonial);
router.delete('/:id', protect, admin, deleteTestimonial);

export default router;
