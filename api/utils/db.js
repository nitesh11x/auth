import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()

const URL = process.env.MONGO_URI
if (!URL) {
    console.log('url is missing in env')
}

export const connectDB = async () => {
    try {
        await mongoose.connect(URL, { dbName: "Auth_System" })
        console.log('database connected')
    } catch (error) {
        console.log(error)
        console.log('database not connected')

    }
}

