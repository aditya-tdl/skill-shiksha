import Admission from '../models/Admission.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

// @desc    Register a new student admission
// @route   POST /api/admission/register
// @access  Public
const registerAdmission = catchAsync(async (req, res, next) => {
    const { name, email, phone, program, status, gender, background, role } = req.body;

    // Validation
    if (!name || !email || !phone || !program || !status || !gender) {
        return next(new AppError("All required fields must be filled", 400));
    }

    // Check if user already exists
    const admissionExists = await Admission.findOne({
        $or: [{ email }, { phone }]
    });

    if (admissionExists) {
        return next(new AppError("User with this email or mobile already exists", 400));
    }

    // Create new admission application
    const newAdmission = await Admission.create({
        name,
        email,
        phone,
        program,
        status,
        gender,
        background,
        role: role ? role : 'student'
    });

    res.status(201).json({
        message: "Registration successful",
        data: newAdmission
    });
});

// @desc    Get all student admissions
// @route   GET /api/admission
// @access  Public
const getAdmissions = catchAsync(async (req, res, next) => {
    const admissions = await Admission.find({}).sort({ createdAt: -1 });
    res.status(200).json({
        message: "Admissions retrieved successfully",
        count: admissions.length,
        data: admissions
    });
});

// @desc    Get single admission by ID
// @route   GET /api/admission/:id
// @access  Public
const getAdmissionById = catchAsync(async (req, res, next) => {
    const admission = await Admission.findById(req.params.id);

    if (!admission) {
        return next(new AppError("Admission request not found", 404));
    }

    res.status(200).json({
        message: "Admission retrieved successfully",
        data: admission
    });
});

// @desc    Update admission details
// @route   PUT /api/admission/:id
// @access  Public
const updateAdmission = catchAsync(async (req, res, next) => {
    let admission = await Admission.findById(req.params.id);

    if (!admission) {
        return next(new AppError("Admission request not found", 404));
    }

    admission = await Admission.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    res.status(200).json({
        message: "Admission updated successfully",
        data: admission
    });
});

// @desc    Delete an admission request
// @route   DELETE /api/admission/:id
// @access  Public
const deleteAdmission = catchAsync(async (req, res, next) => {
    const admission = await Admission.findById(req.params.id);

    if (!admission) {
        return next(new AppError("Admission request not found", 404));
    }

    await admission.deleteOne();

    res.status(200).json({
        message: "Admission deleted successfully"
    });
});

export { registerAdmission, getAdmissions, getAdmissionById, updateAdmission, deleteAdmission };
