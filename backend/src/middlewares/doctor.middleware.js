import { ApiError } from "../utils/ApiError.js";

const verifyDoctor = (req, res, next) => {
    if(req.user?.role === "doctor") {
        next();
    } else {
        throw new ApiError(401, "Unauthorized Request");
    }
}

export { verifyDoctor }