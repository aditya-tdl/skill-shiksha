import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    program: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    background: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'mentor'],
        default: 'student'
    }
}, {
    timestamps: true
});

const Admission = mongoose.model('Admission', admissionSchema);
export default Admission;
