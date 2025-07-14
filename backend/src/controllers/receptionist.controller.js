import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Appointment } from "../models/appointment.model.js"
import { Visited_Patient_Details } from "../models/visited_patient_details.model.js"
import { Bill_Info } from "../models/bill_info.model.js"
import { Medicine } from "../models/medicine.model.js"
import { Report } from "../models/report.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

// add appointment
// Post :- /api/v1/users/receptionist/addAppointment
const addAppointment = asyncHandler(async (req, res) => {
    let { patient_name, mobile_no, age, gender, date_of_app, time_of_app } = req.body;
    if (!patient_name || !mobile_no || !age || !gender || !date_of_app || !time_of_app)
        throw new ApiError(400, "All feilds are required");
    date_of_app += "T00:00:00.000Z";
    date_of_app = new Date(date_of_app)

    const existingApp = await Appointment.findOne({
        $and: [{ patient_name }, { date_of_app }, { time_of_app }]
    })

    if (existingApp) throw new ApiError(409, "Appointment already booked");

    const appointment = await Appointment.create({
        patient_name, mobile_no, age, gender, date_of_app, time_of_app
    })

    const bookedApp = await Appointment.findOne({
        $and: [{ patient_name }, { date_of_app }, { time_of_app }]
    })

    if (!bookedApp) throw new ApiError(500, "Unable to book appointment");

    return res.status(201).json(new ApiResponse(200, bookedApp, "Appointment booked successfully"));
})

// add patient details
// Post :- /api/v1/users/receptionist/addPatientDetails
const addNewPatientDetails = asyncHandler(async (req, res) => {
    let { patient_name, mobile_no, age, weight, gender, symptoms, last_visited } = req.body;
    if (!patient_name || !mobile_no || !age || !weight || !gender || !symptoms || !last_visited)
        throw new ApiError(400, "All feilds are required");

    last_visited += "T00:00:00.000Z";
    last_visited = new Date(last_visited);

    const existingPatient = await Visited_Patient_Details.findOne({ patient_name });
    if (existingPatient) throw new ApiError(400, "Patient already exist");
    const patientDetails = await Visited_Patient_Details.create({
        patient_name, mobile_no, age, weight, gender, symptoms, last_visited
    })

    if (!patientDetails) throw new ApiError(500, "Unable to store patient details");

    await Appointment.findOneAndUpdate(
        { patient_name },
        {
            $set: {
                isVisited: true
            }
        }
    )

    const fullPatientDetails = await Visited_Patient_Details.aggregate([
        {
            $match: {
                patient_name: patient_name
            }
        },
        {
            $lookup: {
                from: "medicines",
                localField: "patient_name",
                foreignField: "patient_name",
                as: "prescriptions"
            }
        },
        {
            $lookup: {
                from: "reports",
                localField: "patient_name",
                foreignField: "patient_name",
                as: "report"
            }
        },
        {
            $lookup: {
                from: "bill_infos",
                localField: "patient_name",
                foreignField: "patient_name",
                as: "payment_details"
            }
        },
        {
            $set: {
                prescriptions: "$prescriptions"
            }
            // $addFields: {
            //     prescriptions: {

            //     },
            //     report: "$report",
            //     payment_details: "$payment_details"
            // }
        },
        {
            $set: {
                report: "$report",
            }
        },
        {
            $set: {
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
                payment_details: 1,
                last_visited: 1
            }
        }

    ])

    if (!fullPatientDetails?.length) throw new ApiError(404, "Patient does not exist")

    return res.status(200).json(new ApiResponse(200, fullPatientDetails[0], "Patient details fetched successfully"));
})

// update patient details
// Post :- /api/v1/users/receptionist/updatePatientDetails
const updateExistingPatientDetails = asyncHandler(async (req, res) => {
    let { patient_name, mobile_no, age, weight, symptoms, last_visited } = req.body;
    if (!patient_name || !mobile_no || !age || !weight || !symptoms || !last_visited)
        throw new ApiError(400, "All feilds are required");

    last_visited += "T00:00:00.000Z";
    last_visited = new Date(last_visited);

    const patientDetails = await Visited_Patient_Details.findOneAndUpdate(
        {
            patient_name: patient_name
        },
        {
            $set: {
                patient_name, mobile_no, age, weight, symptoms, last_visited
            }
        },
        { new: true }
    )

    await Appointment.findOneAndUpdate(
        {
            patient_name: patient_name
        },
        {
            $set: {
                isVisited: true
            }
        }
    )
    if (!patientDetails) throw new ApiError(500, "Unable to update patient details");

    const fullPatientDetails = await Visited_Patient_Details.aggregate([
        {
            $match: {
                patient_name: patient_name
            }
        },
        {
            $lookup: {
                from: "medicines",
                localField: "patient_name",
                foreignField: "patient_name",
                as: "prescriptions"
            }
        },
        {
            $lookup: {
                from: "reports",
                localField: "patient_name",
                foreignField: "patient_name",
                as: "report"
            }
        },
        {
            $lookup: {
                from: "bill_infos",
                localField: "patient_name",
                foreignField: "patient_name",
                as: "payment_details"
            }
        },
        {
            $set: {
                prescriptions: "$prescriptions"
            }
            // $addFields: {
            //     prescriptions: {

            //     },
            //     report: "$report",
            //     payment_details: "$payment_details"
            // }
        },
        {
            $set: {
                report: "$report",
            }
        },
        {
            $set: {
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
                payment_details: 1,
                last_visited: 1
            }
        }

    ])

    if (!fullPatientDetails?.length) throw new ApiError(404, "Patient does not exist")

    return res.status(200).json(new ApiResponse(200, fullPatientDetails[0], "Patient details updated successfully"));
})

// add medicine details
// Post:- /api/v1/users/receptionist/addMedicine
const addMedicine = asyncHandler(async (req, res) => {
    const { patient_name, medicine_name, dosage } = req.body;
    if (!patient_name || !medicine_name || !dosage)
        throw new ApiError(400, "All feilds are required");

    let existingMedicine = await Medicine.findOne({
        $and: [{ patient_name }, { medicine_name }, { dosage }]
    })

    if (existingMedicine)
        return res.status(201).json(new ApiResponse(200, existingMedicine, "Medicine Added Successfully"))

    const medicine = await Medicine.create({
        patient_name, medicine_name, dosage
    })

    if (!medicine) throw new ApiError(500, "Unable to store medicine");

    return res.status(201).json(new ApiResponse(200, medicine, "Medicine Added Successfully"))
})

// add report details
// Post:- /api/v1/users/receptionist/addReport
const addReport = asyncHandler(async (req, res) => {
    const { patient_name, report_name } = req.body;
    if (!patient_name || !report_name)
        throw new ApiError(400, "All feilds are required");

    if (!req.file?.path) throw new ApiError(400, "Report file required");

    const reportFile = await uploadOnCloudinary(req.file?.path);

    if (!reportFile) throw new ApiError(500, "Unable to store report on cloudinary");

    const report = await Report.create({
        patient_name, report_name,
        url: reportFile?.url || ""
    })

    if (!report) throw new ApiError(500, "Unable to store report");

    return res.status(201).json(new ApiResponse(200, report, "Report Added Successfully"))
})

// add bill info
// Get :- /api/v1/users/receptionist/addPaymentDetails
const addPaymentDetails = asyncHandler(async (req, res) => {
    const { patient_name, amount, date } = req.body;
    if (!patient_name || !amount || !date)
        throw new ApiError(400, "All feilds are required");

    const paymentDetails = await Bill_Info.create({
        patient_name, amount, date
    })

    if (!paymentDetails) throw new ApiError(500, "Unable to store payment details");

    return res.status(201).json(new ApiResponse(200, paymentDetails, "Payment Deatils added successfully"));
})

const deleteAppointments = asyncHandler(async (req, res) => {
    const currentDate = new Date();
    const end = new Date(Date.now() - currentDate.getDate() * 24 * 60 * 60 * 1000);
    let start;
    if (end.getMonth() + 1 === 1 || end.getMonth() + 1 === 3 || end.getMonth() + 1 === 5 || end.getMonth() + 1 === 7 || end.getMonth() + 1 === 8 || end.getMonth() + 1 === 10 || end.getMonth() + 1 === 12)
        start = new Date(end - 30 * 24 * 60 * 60 * 1000);

    else if (end.getMonth() + 1 === 4 || end.getMonth() + 1 === 6 || end.getMonth() + 1 === 8 || end.getMonth() + 1 === 11)
        start = new Date(end - 29 * 24 * 60 * 60 * 1000);

    else {
        if (end.getFullYear() % 4 === 0) previousDate = new Date(end - 28 * 24 * 60 * 60 * 1000);
        else start = new Date(end - 27 * 24 * 60 * 60 * 1000);
    }
    const deletedRecords = await Appointment.deleteMany({
        date_of_app: {
            $gte: start,
            $lte: end
        }
    })
    return res.status(200).json(new ApiResponse(200, deletedRecords, "Last months appointments deleted successfully"))
})
export {
    addAppointment,
    addPaymentDetails,
    addMedicine,
    addReport,
    updateExistingPatientDetails,
    addNewPatientDetails,
    deleteAppointments
}