import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        const uniquename = Date.now() + Math.round(Math.random() * 1E9)
        const ext = path.extname(file.originalname)
        cb(null, file.originalname.split('.')[0] + "-" + uniquename + ext)
    }
})

// const fileFilter = (req, file, cb) => {
//     const allowedTypes = [
//         "image/jpeg",
//         "image/png",
//         "application/zip",
//         "application/x-zip-compressed",
//         "application/javascript",
//         "text/javascript",
//     ]

//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null,true)
//     } else {
//         cb(new Error("File not supported"),false)
//     }

// }

export const upload = multer({
    storage,
    // fileFilter
})