import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret_key_12345', {
        expiresIn: '30d'
    });
};

// @desc    Register a new Admin
// @route   POST /api/auth/admin/register
// @access  Public (Can be restricted later)
const registerAdmin = catchAsync(async (req, res, next) => {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
        return next(new AppError("Please provide name, email, and password", 400));
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(new AppError("Email already registered", 400));
    }

    const user = await User.create({
        name,
        email,
        password,
        phone,
        role: 'admin' // Force the role to be admin for this route
    });

    if (user) {
        res.status(201).json({
            message: "Admin registered successfully",
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            phone: user.phone,
            token: generateToken(user.id)
        });
    } else {
        return next(new AppError("Invalid user data", 400));
    }
});

// @desc    Admin Login
// @route   POST /api/auth/admin/login
// @access  Public
const loginAdmin = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError("Please provide email and password", 400));
    }

    const user = await User.findOne({ email });

    // Ensure user exists, password matches, AND they have the 'admin' role
    if (user && (await user.matchPassword(password))) {
        if (user.role !== 'admin') {
            return next(new AppError("Access denied. Only Admins can login here.", 403));
        }

        res.status(200).json({
            message: "Admin logged in successfully",
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user.id)
        });
    } else {
        return next(new AppError("Invalid email or password", 401));
    }
});

export { registerAdmin, loginAdmin };
