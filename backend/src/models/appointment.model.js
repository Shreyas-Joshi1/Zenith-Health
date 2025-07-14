import mongoose, { Schema } from "mongoose"

const appointmentSchema = new Schema({
    patient_name: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date_of_app: {
        type: Date,
        required: true
    },
    time_of_app: {
        type: String,
        required: true
    },
    isVisited: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Appointment = mongoose.model("Appointment", appointmentSchema);