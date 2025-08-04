import { Router } from "express";
import getParams from "../middlewares/getparamsInReq.middleware.js";
import { getData } from "../controllers/getFIle.controller.js";


const router = Router()

router.route("/singleFile").get(
    getParams,
    getData
)


export default router
