import Internship from '../models/Internship.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

// @desc    Get all internships
// @route   GET /api/internships
// @access  Public
export const getInternships = catchAsync(async (req, res, next) => {
    const internships = await Internship.find({});
    res.status(200).json({ success: true, count: internships.length, data: internships });
});

// @desc    Get single internship
// @route   GET /api/internships/:id
// @access  Public
export const getInternship = catchAsync(async (req, res, next) => {
    const internship = await Internship.findById(req.params.id);
    if (!internship) {
        return next(new AppError('Internship not found', 404));
    }
    res.status(200).json({ success: true, data: internship });
});

// @desc    Create new internship
// @route   POST /api/internships
// @access  Private/Admin
export const createInternship = catchAsync(async (req, res, next) => {
    // Automatically set seatsLeft to totalSeats when creating an internship
    if (req.body.totalSeats && req.body.seatsLeft === undefined) {
        req.body.seatsLeft = req.body.totalSeats;
    }

    const internship = await Internship.create(req.body);
    res.status(201).json({ success: true, data: internship });
});

// @desc    Update internship
// @route   PUT /api/internships/:id
// @access  Private/Admin
export const updateInternship = catchAsync(async (req, res, next) => {
    const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!internship) {
        return next(new AppError('Internship not found', 404));
    }
    res.status(200).json({ success: true, data: internship });
});

// @desc    Delete internship
// @route   DELETE /api/internships/:id
// @access  Private/Admin
export const deleteInternship = catchAsync(async (req, res, next) => {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
        return next(new AppError('Internship not found', 404));
    }
    res.status(200).json({ success: true, message: 'Internship deleted' });
});
