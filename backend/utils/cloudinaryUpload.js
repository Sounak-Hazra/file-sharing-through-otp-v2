import { v2 as cloudinary } from 'cloudinary'
import fs from "fs/promises"
import dotenv from "dotenv"
import path from 'path';

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});





const cloudinaryUpload = async (filepath) => {
    try {

        await new Promise((res) => setTimeout(res, 1000));

        const res = await cloudinary.uploader.upload(filepath, {
            resource_type: "raw"
        });

        await fs.unlink(filepath)
        return res;
    } catch (error) {
        console.log(error)
        return null
    }
}

export default cloudinaryUpload