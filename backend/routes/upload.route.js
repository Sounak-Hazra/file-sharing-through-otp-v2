

import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import uploadController from "../controllers/upload.controller.js";

const router = Router()


router.route("/uploadSingle").post(
    upload.single("file"),
    uploadController
)


export default router