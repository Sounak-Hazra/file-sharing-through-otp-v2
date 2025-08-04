import { FileModel } from "../models/file.model.js";
import asyncHandler from "../utils/asynchandler.js";



const getData = asyncHandler( async (req,res) => {
    
    const { otp } = req;

    const fileDocument = await FileModel.findOne({ otp })
    
    if (!fileDocument) {
        return res
            .status(404)
            .json({message:"Data not found or expired."})
    }

    else {
        return res
            .status(200)
            .json({message:"Data found.",data:fileDocument})
    }
})

export {
    getData
}