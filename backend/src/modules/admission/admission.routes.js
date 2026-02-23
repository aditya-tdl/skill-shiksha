import express from "express";
import { registerStudent, getAllRegistrations } from "./admission.controller.js";

const router = express.Router();

router.post("/register", registerStudent);
router.get("/registrations", getAllRegistrations); // Note: Should probably have admin auth in production

export default router;
