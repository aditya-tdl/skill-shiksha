import Internship from '../models/Internship.js';

// @desc    Get all internships
// @route   GET /api/internships
// @access  Public
export const getInternships = async (req, res) => {
    try {
        const internships = await Internship.find({});
        res.status(200).json({ success: true, count: internships.length, data: internships });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// @desc    Get single internship
// @route   GET /api/internships/:id
// @access  Public
export const getInternship = async (req, res) => {
    try {
        const internship = await Internship.findById(req.params.id);
        if (!internship) {
            return res.status(404).json({ success: false, message: 'Internship not found' });
        }
        res.status(200).json({ success: true, data: internship });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// @desc    Create new internship
// @route   POST /api/internships
// @access  Private/Admin
export const createInternship = async (req, res) => {
    try {
        // Automatically set seatsLeft to totalSeats when creating an internship
        if (req.body.totalSeats && req.body.seatsLeft === undefined) {
            req.body.seatsLeft = req.body.totalSeats;
        }

        const internship = await Internship.create(req.body);
        res.status(201).json({ success: true, data: internship });
    } catch (error) {
        // Handle MongoDB duplicate key error (code 11000) for unique constraints like title
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(400).json({
                success: false,
                message: `An internship with this ${field} already exists. Please use a unique ${field}.`
            });
        }
        res.status(400).json({ success: false, message: 'Invalid data', error: error.message });
    }
};

// @desc    Update internship
// @route   PUT /api/internships/:id
// @access  Private/Admin
export const updateInternship = async (req, res) => {
    try {
        const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!internship) {
            return res.status(404).json({ success: false, message: 'Internship not found' });
        }
        res.status(200).json({ success: true, data: internship });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Invalid data', error: error.message });
    }
};

// @desc    Delete internship
// @route   DELETE /api/internships/:id
// @access  Private/Admin
export const deleteInternship = async (req, res) => {
    try {
        const internship = await Internship.findByIdAndDelete(req.params.id);
        if (!internship) {
            return res.status(404).json({ success: false, message: 'Internship not found' });
        }
        res.status(200).json({ success: true, message: 'Internship deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};
