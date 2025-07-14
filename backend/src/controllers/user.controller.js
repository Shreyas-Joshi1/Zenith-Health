import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { Visited_Patient_Details } from "../models/visited_patient_details.model.js"
import { Appointment } from "../models/appointment.model.js"
import { Bill_Info } from "../models/bill_info.model.js"

// register user
// post :- /api/v1/users/register
const registerUser = asyncHandler( async (req, res) => {
    // get details from frontend
    // validate details (all feilds must be non-empty)
    // check for existing user
    // handle files
    // create user in db
    // check for creation of user
    // send resonse

    const { username, fullname, mobile_no, role, email, password } = req.body;

    if(!username || !fullname || !mobile_no || !role || !email || !password) 
        throw new ApiError(400, "All feilds are required except avatar")

    const existingUser = await User.findOne({
        $and: [{ fullname }, { role }, { username }]
    })

    if(existingUser) throw new ApiError(400, "User already exists")

    const avatarLocalPath = req.file?.path;

    let avatar;
    if(avatarLocalPath) avatar = await uploadOnCloudinary(avatarLocalPath);

    

    const user = await User.create({
        username, fullname, mobile_no, role, email, password, 
        avatar: avatar?.url || ""
    })

    const registeredUser = await User.findById(user._id).select("-password -refreshToken");

    if(!registeredUser) throw new ApiError(500, "Unable to register user");

    return res.status(201).json(new ApiResponse(200, registerUser, "User registered successfully"));
} )

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Unable to generate Access and refresh token")
    }
}
// login user  
// Post :- /api/v1/users/login
const loginUser = asyncHandler( async (req, res) => {
    // get details (role, username, password)
    // validate details
    // check if user present in db
    // check for password
    // generate tokens
    // send that tokens to client browser
    // send response

    const { role, username, password } = req.body;
    if(!role || !username || !password) throw new ApiError(400, "All feilds are required")

    const existingUser = await User.findOne({username})

    if(!existingUser) throw new ApiError(404, "User not found");
    if(existingUser.role !== role) throw new ApiError(404, "Invalid role choosed");

    const isPasswordCorrect = await existingUser.isPasswordCorrect(password);

    if(!isPasswordCorrect) throw new ApiError(409, "Incorrect Password");

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(existingUser._id);

    const loggedInUser = await User.findById(existingUser._id).select("-password -refreshToken")

    return res.status(200).cookie("accessToken", accessToken, {httpOnly: true, secure: true, maxAge: 7 * 24 * 60 * 60 * 1000})
    .cookie("refreshToken", refreshToken, {httpOnly: true, secure: true, maxAge: 15 * 24 * 60 * 60 * 1000})
    .json(new ApiResponse(200, loggedInUser, "User Logged in successfully"));
} )

// logout user
// Post :- /api/v1/users/logout
const logoutUser = asyncHandler( async (req, res) => {
    // find user
    // clear cookies
    // reset refresh token
    await User.findByIdAndUpdate(req.user._id, { $unset: {refreshToken: 1}}, {new:true})

    const options = {
        httpOnly: true,
        secure: true
    }


    return res.status(200).clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"))
} )

// update user details
// Post:- /api/v1/users/update:username
const updateUserDetails = asyncHandler( async (req, res) => {
    const { username, fullname, mobile_no, role, email } = req.body;

    if(!username || !fullname || !mobile_no || !role || !email) 
        throw new ApiError(400, "All feilds are required except avatar")
    
        const user = await User.findByIdAndUpdate(req.user?._id,
            {
                $set: {
                    username, fullname, mobile_no, role, email
                }
            }, 
            { new:true }
        ).select("-password -refreshToken");
    
        return res.status(200).json(new ApiResponse(200, user, "Account details updated successfully"));

} )

const changeCurrentPassword = asyncHandler ( async (req, res) => {
    const { oldPassword, newPassword } = req.body
    
    const user = await User.findById(req.user?._id)

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect) throw new ApiError(400, "Invalid password")

    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    return res.status(200).json(new ApiResponse(200, {}, "Password changed successfully"));
} )

const getCurrentUser = asyncHandler( async (req, res) => {
    return res.status(200).json(new ApiResponse(200, req.user, "Current User details fetched successfully"));
} )

const updateUserAvatar = asyncHandler( async (req, res) => {
    // frontend 
    // multer locally upload
    // uploadCloudinary
    // db change
    const localPath = req.file?.path

    if(!localPath) return new ApiError(400, "Avatar is missing")

    const avatar = await uploadOnCloudinary(localPath)

    if(!avatar.url) return new ApiError(400, "Error while uploading on cloudinary")

    const user = await User.findByIdAndUpdate(req.user?._id,
        {
            $set: { avatar: avatar.url }
        },
        {new: true}
    ).select("-refreshToken -password")

    return res.status(200).json(new ApiResponse(200, user, "Avatar updated successfully"));
})


// get all appointments
// Get :- /api/v1/users/appointments
const getAllAppointments = asyncHandler( async (req, res) => {
    const appointments = await Appointment.find();
    return res.status(200).json(new ApiResponse(200, appointments, "All Appointments fetched successfully"))
} )

// get all patients
// Get :- /api/v1/users/allPatientDetails
const getAllVisitedPatients = asyncHandler( async (req, res) => {
    const allPatients = await Visited_Patient_Details.find();
    return res.status(200).json(new ApiResponse(200, allPatients, "All Visited patients details fetched successfully"));
} )

// get all bill info
// Get :- /api/v1/users/allPayments
const getAllPaymentDetails = asyncHandler( async (req, res) => {
    const allPayments = await Bill_Info.find();
    return res.status(200).json(new ApiResponse(200, allPayments, "All Payment details fetched successfully"));
    
} )

// get single Patient details
// Get :- /api/v1/users/:patient_name
const getSinglePatientDetails = asyncHandler( async (req, res) => { 
    const { patient_name } = req.params
    if(!patient_name) throw new ApiError(400, "Patient name required");

    const patientDetails = await Visited_Patient_Details.aggregate([
        {
            $match: {patient_name: patient_name}
        }, 
        {
            $lookup: {
                from: "medicines",
                localField: "patient_name",
                foreignField: "patient_name",
                as : "prescriptions"
            }
        },
        {
            $lookup: {
                from : "reports",
                localField: "patient_name",
                foreignField: "patient_name",
                as : "reports"
            }
        },
        {
            $lookup: {
                from : "bill_infos",
                localField: "patient_name",
                foreignField: "patient_name",
                as : "payment_details"
            }
        },
        {
            $addFields: {
                prescriptions: "$prescriptions",
                report: "$reports",
                payment_details: "$payment_details"
            }
        },
        {
            $project: {
                patient_name: 1, 
                mobile_no: 1, 
                age: 1, 
                weight: 1, 
                gender: 1, 
                symptoms: 1,
                prescriptions: 1,
                report: 1,
                payment_details: 1
            }
        }
    ])
    if(!patientDetails?.length) throw new ApiError(400, "Patient not found");

    return res.status(200).json(new ApiResponse(200, patientDetails[0], "Patient Details Fetched Successfully"));
} )

// get daily appointments
// Get :- /api/v1/users/dailyAppointments 
const getDailyAppointments = asyncHandler( async (req, res) => {
    const currentDate = new Date();
    const previousDate = new Date(currentDate - 24 * 60 * 60 * 1000);
    const dailyApp = await Appointment.find({
        date_of_app: {
            $gte: previousDate,
            $lte: currentDate
        }
    })
    return res.status(200).json(new ApiResponse(200, dailyApp, "Daily Appointments fetched sucessfully"));
} )

// regenerate access token
// post :- /api/v1/users/refreshAccessToken
const refreshAccessToken = asyncHandler( async(req, res) => {
    try {
        const user = await User.findById(req.user?._id);
        if(user?.refreshToken !== req.cookies?.refreshToken) 
            throw new ApiError(400, "Unauthorized request");
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        user.save({ validateBeforeSave: false });
        res.cookie("accessToken", accessToken, {httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000})
        .cookie("refreshToken", refreshToken, {httpOnly: true, secure: true, maxAge: 10 * 24 * 60 * 60 * 1000})
        .json(new ApiResponse(200, "Tokens updated successfully"));

    } catch (error) {
        throw new ApiError(500, "Unable to generate Access and refresh token")
    }
} )

export {
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
}
