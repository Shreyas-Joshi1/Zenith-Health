import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyDoctor } from "../middlewares/doctor.middleware.js";
import {
    dailyWeeklyMonthlyPatientCount,
    dailyWeeklyMonthlyRevenue,
    averageAppointmentsPerDay
} from "../controllers/doctor.controller.js"

const router = Router();
router.route("/patientCountInfo").get(verifyJWT, verifyDoctor, dailyWeeklyMonthlyPatientCount);

router.route("/revenueInfo").get(verifyJWT, verifyDoctor, dailyWeeklyMonthlyRevenue);

router.route("/averageAppointments").get(verifyJWT, verifyDoctor, averageAppointmentsPerDay);

export default router;