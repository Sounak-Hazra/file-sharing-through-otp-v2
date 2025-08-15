import asyncHandler from "../utils/asynchandler.js";
import cloudinaryUpload from "../utils/cloudinaryUpload.js";
import { FileModel } from "../models/file.model.js";

function makeCloudinaryDownloadLink(originalUrl, customName = "") {
  const parts = originalUrl.split("/upload/");
  if (parts.length !== 2) return originalUrl;

  const middle = customName ? `fl_attachment:${customName}` : "fl_attachment";
  return `${parts[0]}/upload/${middle}/${parts[1]}`;
}


const uploadController = asyncHandler(async (req, res) => {
  try {
    const fileData = req.file;

    const data = await cloudinaryUpload(fileData.path);

    console.log(data)
    
    if (!data) {
      return res.status(404).json({
        message: "Unable to upload file.",
      });
    }

    const otp = Math.floor(1000000000 + Math.random() * 9000000000).toString();

    const downloadableUrl = makeCloudinaryDownloadLink(data.url)

    const newFile = await FileModel.create({
      filename: fileData.filename,
      otp: otp,
      fileLink: downloadableUrl ,
    });

    return res.status(201).json({
      message: "File uploaded successfully",
      file: {
        filename: newFile.filename,
        fileLink: newFile.link,
        otp: newFile.otp,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Internal server error" });
  }  
});

export default uploadController;
