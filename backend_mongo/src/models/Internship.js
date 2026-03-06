import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    badge: {
        type: String,
        default: ""
    },
    tags: {
        type: [String],
        required: true,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'An internship must have at least one tag.'
        }
    },
    duration: {
        type: String,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true,
        min: 1
    },
    seatsLeft: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    emiAvailable: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Internship = mongoose.model('Internship', internshipSchema);
export default Internship;
