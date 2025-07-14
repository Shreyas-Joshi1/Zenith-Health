import mongoose, { Schema } from "mongoose"

const reportSchema = new Schema({
    patient_name: {
        type: String,
        required: true
    },
    report_name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
}, { timestamps: true })

export const Report = mongoose.model("Report", reportSchema);