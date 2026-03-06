import mongoose from 'mongoose';
import Internship from './src/models/Internship.js';
import dotenv from 'dotenv';
dotenv.config();

async function testInternship() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");

        const internship = new Internship({
            title: "Full-Stack MERN Internship",
            description: "Master MongoDB, Express, React & Node.js by building 3+ production apps.",
            badge: "Most Popular",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            duration: "3 Months",
            seatsLeft: 4,
            price: 15000,
            emiAvailable: true
        });

        const saved = await internship.save();
        console.log("Successfully saved internship:", saved);

        // Cleanup test data
        await Internship.findByIdAndDelete(saved._id);
        console.log("Cleaned up test data");

    } catch (e) {
        console.error("Test failed:", e);
    } finally {
        await mongoose.connection.close();
    }
}

testInternship();
