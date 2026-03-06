import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret_key_12345', {
        expiresIn: '30d'
    });
};

// @desc    Register a new Admin
// @route   POST /api/auth/admin/register
// @access  Public (Can be restricted later)
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({ message: "Please provide name, email, and password" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Email already registered" });
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
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.error("Admin Registration Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// @desc    Admin Login
// @route   POST /api/auth/admin/login
// @access  Public
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        const user = await User.findOne({ email });

        // Ensure user exists, password matches, AND they have the 'admin' role
        if (user && (await user.matchPassword(password))) {
            if (user.role !== 'admin') {
                return res.status(403).json({ message: "Access denied. Only Admins can login here." });
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
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Admin Login Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export { registerAdmin, loginAdmin };
