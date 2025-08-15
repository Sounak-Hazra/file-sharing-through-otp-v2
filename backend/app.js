import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()


app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"frontend/dist")))

import uploadSingle from "./routes/upload.route.js"
app.use("/api/v1/upload",uploadSingle)

import getData from "./routes/get.route.js"
app.use("/api/v1/getdata", getData)

app.all('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname,"frontend/dist/index.html"));
});


export default app