import { ApiError } from "../utils/ApiError.js"


const verifyReceptionist = (req, res, next) => {
    if(req.user.role === "receptionist") {
        next();
    } else {
        throw new ApiError(400, "Unauthorized request");
    }
}

export { verifyReceptionist }