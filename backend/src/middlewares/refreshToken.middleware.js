import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const verifyRefreshToken = asyncHandler( async (req, res, next) => {
    try {
        const token = req.cookies?.refreshToken || req.header("Authorization")?.replace("Bearer ", "");

        if(!token) throw new ApiError(401, "Unauthorized request")

        const decodedUser = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)

        const user = await User.findById(decodedUser?._id).select("-password")

        if(!user) throw new ApiError(401, "Invalid Access Token");
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
} )

export { verifyRefreshToken }