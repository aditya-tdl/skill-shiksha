import express from "express";
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import admissionRoutes from "./modules/admission/admission.routes.js";
// import bookingRoutes from "./modules/booking/booking.routes.js";
// import slotRoutes from "./modules/slot/slot.routes.js";
// import journalRoutes from "./modules/journal/journal.routes.js";
// import dashboardRoutes from "./modules/dashboard/dashboard.routes.js";


const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/admission", admissionRoutes);



export default router;
