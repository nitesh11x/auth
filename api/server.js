import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./utils/db.js"
import { generateOTP } from "./utils/generate.otp.js"
import cors from 'cors'


dotenv.config()
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "welcome to otp api" })
})
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST',],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))

import otpRouter from './routes/otp.routes.js'
import userRouter from './routes/user.routes.js'

app.use(express.json())

app.use('/otp', otpRouter)
app.use('/user', userRouter)

console.log(generateOTP())

await connectDB()
app.listen(PORT, () => console.log(`server is live at ${PORT}`))


