import mongoose from "mongoose";


const DATABASE_NAME = "shareAnyWhare"

const connect = async () => {
    try {
        const isConnected = await mongoose.connect(`${process.env.MONGO_URI}hello`)
        console.log(`Data base connected successfully ,Host name : ${isConnected.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connect