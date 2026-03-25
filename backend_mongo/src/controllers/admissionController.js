import Admission from '../models/Admission.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';
import sendEmail, { getRegistrationEmailTemplate } from '../utils/sendEmail.js';

// @desc    Register a new student admission
// @route   POST /api/admission/register
// @access  Public
const registerAdmission = catchAsync(async (req, res, next) => {
    const { name, email, phone, program, status, gender, background, role } = req.body;

    // Check if user already exists
    const existingAdmission = await Admission.findOne({
        $or: [{ email }, { phone }]
    });

    // Determine if this is a "Full" request (has program, status, or gender)
    const isFullRequest = !!(program || status || gender);

    if (existingAdmission) {
        // Check if existing record is already "Full"
        const isExistingFull = existingAdmission.program !== "N/A" &&
            existingAdmission.status !== "N/A" &&
            existingAdmission.gender !== "N/A";

        if (isFullRequest) {
            if (isExistingFull) {
                // Requirement #4: Throw error if already fully registered
                return next(new AppError("This mobile number or email is already registered.", 400));
            } else {
                // Requirement #3: Update partial to full
                existingAdmission.name = name || existingAdmission.name;
                existingAdmission.email = email || existingAdmission.email;
                existingAdmission.phone = phone || existingAdmission.phone;
                existingAdmission.program = program;
                existingAdmission.status = status;
                existingAdmission.gender = gender;
                existingAdmission.background = background || existingAdmission.background;
                existingAdmission.role = role || existingAdmission.role;

                await existingAdmission.save();

                // Send Success Email for Full Registration Update
                const emailHtml = getRegistrationEmailTemplate(existingAdmission.name, existingAdmission.program);
                sendEmail({
                    email: existingAdmission.email,
                    subject: `Registration Successful - ${existingAdmission.program}`,
                    html: emailHtml
                });

                return res.status(200).json({
                    success: true,
                    message: "User registered successfully",
                    data: existingAdmission
                });
            }
        } else {
            // Requirement #1: If partial request for existing user, return success
            return res.status(200).json({
                success: false,
                message: "User already exists with this contact information",
                data: existingAdmission
            });
        }
    }

    // User does not exist, create new record
    // Requirement #1 & #2: If partial, fill with N/A; if full, register directly
    const newAdmission = await Admission.create({
        name,
        email,
        phone,
        program: program || "N/A",
        status: status || "N/A",
        gender: gender || "N/A",
        background: background || "N/A",
        role: role ? role : 'student'
    });

    res.status(201).json({
        success: true,
        message: "Registration successful",
        data: newAdmission
    });

    // Send Success Email if it was a Full Registration from the start
    if (isFullRequest) {
        const emailHtml = getRegistrationEmailTemplate(newAdmission.name, newAdmission.program);
        sendEmail({
            email: newAdmission.email,
            subject: `Registration Successful - ${newAdmission.program}`,
            html: emailHtml
        });
    }
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

// @desc    Update connect status of an admission
// @route   PATCH /api/admission/:id/connect-status
// @access  Private/Admin
const updateConnectStatus = catchAsync(async (req, res, next) => {
    const { connect_status } = req.body;

    if (!['pending', 'contacted', 'joined'].includes(connect_status)) {
        return next(new AppError("Invalid connect status", 400));
    }

    const admission = await Admission.findByIdAndUpdate(
        req.params.id,
        { connect_status },
        { new: true, runValidators: true }
    );

    if (!admission) {
        return next(new AppError("Admission request not found", 404));
    }

    res.status(200).json({
        message: "Connect status updated successfully",
        data: admission
    });
});

export { registerAdmission, getAdmissions, getAdmissionById, updateAdmission, deleteAdmission, updateConnectStatus };
