import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        unique: true,
        required:true
    },
    otp: {
        type: String,
        required:true,
    },
    fileLink: {
        type: String,
        required:true
    }
},{timestamps:true})

export const FileModel = mongoose.model("file",fileSchema)