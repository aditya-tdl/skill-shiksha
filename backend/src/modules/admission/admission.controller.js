import { prisma } from "../../config/db.js";
import catchAsync from "../../utils/catchAsync.js";
import ApiResponse from "../../utils/ApiResponse.js";

/**
 * @desc Create a new student registration
 * @route POST /api/admission/register
 */
export const registerStudent = catchAsync(async (req, res) => {
    const { name, email, phone, program, status, gender, background } = req.body;
    console.log("body", req.body);
    // Basic validation
    if (!name || !email || !phone || !program || !status || !gender) {
        return res.status(400).json(
            new ApiResponse(400, null, "All required fields must be provided")
        );
    }

    const registration = await prisma.student_registration.create({
        data: {
            name,
            email,
            phone,
            program,
            status,
            gender,
            background: background || null,
        },
    });

    return res.status(201).json(
        new ApiResponse(201, registration, "Registration submitted successfully")
    );
});

/**
 * @desc Get all student registrations (Admin only concept)
 * @route GET /api/admission/registrations
 */
export const getAllRegistrations = catchAsync(async (req, res) => {
    const registrations = await prisma.student_registration.findMany({
        orderBy: {
            created_at: "desc",
        },
    });

    return res.status(200).json(
        new ApiResponse(200, registrations, "Registrations fetched successfully")
    );
});
