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
    //career_status
    status: {
        type: String,
        required: true
    },
    //connect_status
    connect_status: {
        type: String,
        required: true,
        enum: ['pending', 'contacted', 'joined'],
        default: 'pending'

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
