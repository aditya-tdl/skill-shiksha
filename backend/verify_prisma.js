import { prisma } from "./src/config/db.js";

async function check() {
    try {
        console.log("Checking prisma models...");
        console.log("user model:", !!prisma.user);
        console.log("student_registration model:", !!prisma.student_registration);
        process.exit(0);
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
}

check();
