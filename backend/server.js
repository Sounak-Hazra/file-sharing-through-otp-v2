import dotenv from "dotenv"
import connect from "./dbConfig/connect.js"

dotenv.config()

import app from "./app.js";


await connect()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App is up and running on port ${PORT}`)
})