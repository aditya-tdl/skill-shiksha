import Testimonial from '../models/Testimonial.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
export const getTestimonials = catchAsync(async (req, res, next) => {
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: testimonials.length, data: testimonials });
});

// @desc    Get single testimonial
// @route   GET /api/testimonials/:id
// @access  Public
export const getTestimonial = catchAsync(async (req, res, next) => {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
        return next(new AppError('Testimonial not found', 404));
    }
    res.status(200).json({ success: true, data: testimonial });
});

// @desc    Create new testimonial
// @route   POST /api/testimonials
// @access  Private/Admin
export const createTestimonial = catchAsync(async (req, res, next) => {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ success: true, data: testimonial });
});

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private/Admin
export const updateTestimonial = catchAsync(async (req, res, next) => {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!testimonial) {
        return next(new AppError('Testimonial not found', 404));
    }
    res.status(200).json({ success: true, data: testimonial });
});

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private/Admin
export const deleteTestimonial = catchAsync(async (req, res, next) => {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
        return next(new AppError('Testimonial not found', 404));
    }
    res.status(200).json({ success: true, message: 'Testimonial deleted' });
});
