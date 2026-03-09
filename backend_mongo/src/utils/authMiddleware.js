import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import catchAsync from './catchAsync.js';
import AppError from './AppError.js';

// Protect routes
export const protect = catchAsync(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    // 1) Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key_12345');

    // 2) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(
            new AppError('The user belonging to this token does no longer exist.', 401)
        );
    }

    // Grant access to protected route
    req.user = currentUser;
    next();
});

// Grant access to specific roles
export const restrictTo = (...roles) => {
    return (req, res, next) => {
        // roles ['admin', 'student'] etc.
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError('You do not have permission to perform this action', 403)
            );
        }
        next();
    };
};

// Explicit admin middleware for simplicity based on previous setup
export const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return next(new AppError('Not authorized as an admin', 403));
    }
};
