import Admission from '../models/Admission.js';

// @desc    Register a new student admission
// @route   POST /api/admission/register
// @access  Public
const registerAdmission = async (req, res) => {
    try {
        const { name, email, phone, program, status, gender, background, role } = req.body;

        // Validation
        if (!name || !email || !phone || !program || !status || !gender) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        // Check if user already exists
        const admissionExists = await Admission.findOne({
            $or: [{ email }, { phone }]
        });

        if (admissionExists) {
            return res.status(400).json({ message: "User with this email or mobile already exists" });
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
    } catch (error) {
        console.error("Admission Registration Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// @desc    Get all student admissions
// @route   GET /api/admission
// @access  Public
const getAdmissions = async (req, res) => {
    try {
        const admissions = await Admission.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Admissions retrieved successfully",
            count: admissions.length,
            data: admissions
        });
    } catch (error) {
        console.error("Get Admissions Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// @desc    Get single admission by ID
// @route   GET /api/admission/:id
// @access  Public
const getAdmissionById = async (req, res) => {
    try {
        const admission = await Admission.findById(req.params.id);

        if (!admission) {
            return res.status(404).json({ message: "Admission request not found" });
        }

        res.status(200).json({
            message: "Admission retrieved successfully",
            data: admission
        });
    } catch (error) {
        console.error("Get Admission By ID Error:", error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: "Admission request not found" });
        }
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// @desc    Update admission details
// @route   PUT /api/admission/:id
// @access  Public
const updateAdmission = async (req, res) => {
    try {
        let admission = await Admission.findById(req.params.id);

        if (!admission) {
            return res.status(404).json({ message: "Admission request not found" });
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
    } catch (error) {
        console.error("Update Admission Error:", error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: "Admission request not found" });
        }
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// @desc    Delete an admission request
// @route   DELETE /api/admission/:id
// @access  Public
const deleteAdmission = async (req, res) => {
    try {
        const admission = await Admission.findById(req.params.id);

        if (!admission) {
            return res.status(404).json({ message: "Admission request not found" });
        }

        await admission.deleteOne();

        res.status(200).json({
            message: "Admission deleted successfully"
        });
    } catch (error) {
        console.error("Delete Admission Error:", error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: "Admission request not found" });
        }
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export { registerAdmission, getAdmissions, getAdmissionById, updateAdmission, deleteAdmission };
