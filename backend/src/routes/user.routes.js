import { Router } from "express"
import { upload } from "../middlewares/multer.middleware.js";
import {
    registerUser,
    loginUser,
    logoutUser,
    getAllAppointments,
    getAllVisitedPatients,
    getSinglePatientDetails,
    getAllPaymentDetails,
    updateUserDetails,
    getCurrentUser,
    changeCurrentPassword,
    updateUserAvatar,
    getDailyAppointments,
    refreshAccessToken
} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { verifyRefreshToken } from "../middlewares/refreshToken.middleware.js";

const router = Router();

router.route("/register").post(
    upload.single("avatar"),
    registerUser
)

router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/appointments").get(verifyJWT, getAllAppointments);
router.route("/allPatientDetails").get(verifyJWT, getAllVisitedPatients);

router.route("/allPayments").get(verifyJWT, getAllPaymentDetails);
router.route("/details/:patient_name").get(verifyJWT, getSinglePatientDetails);

router.route("/updateProfile").post(verifyJWT, updateUserDetails);
router.route("/changePassword").post(verifyJWT, changeCurrentPassword);
router.route("/changeAvatar").post(verifyJWT, upload.single("avatar"), updateUserAvatar);

router.route("/getCurrentUser").get(verifyJWT, getCurrentUser);
router.route("/dailyAppointments").get(verifyJWT, getDailyAppointments);

router.route("/refreshAccessToken").post(verifyRefreshToken, refreshAccessToken);

export default router;