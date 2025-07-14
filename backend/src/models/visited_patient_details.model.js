import mongoose, { Schema } from "mongoose"

const visited_patient_detailsSchema = new Schema({
    patient_name: {
        type: String,
        required: true
    },
    prescriptions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Medicine"
        }
    ],
    mobile_no: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    symptoms: {
        type: String,
        required: true,
    },
    report: [
        {
            type: Schema.Types.ObjectId,
            ref: "Report"
        }
    ],
    payment_details: {
        type: Schema.Types.ObjectId,
        ref: "Bill_Info"
    },
    last_visited: {
        type: Date
    }
}, { timestamps: true })

export const Visited_Patient_Details = mongoose.model("Visited_Patient_Details", visited_patient_detailsSchema)