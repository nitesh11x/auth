import { Otp } from "../models/Otp.schema.js"
import { generateOTP } from "../utils/generate.otp.js"
import { sendOtpToEmail } from "../utils/sendotp.js"


export const sendOtp = async (req, res) => {
    const { email } = req.body
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) return res.status(404).json({ message: "please enter email", success: false })

    try {
        const isExistOtp = await Otp.findOne({ email })
        if (isExistOtp) await Otp.deleteOne({ email })

        const otp = generateOTP()
        await Otp.create({ email, otp })
        sendOtpToEmail(email, otp)
        return res.status(200).json({ message: "otp sent successfully", success: true })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "error to send otp ", success: false })
    }
}
export const verifyOtp = async (req, res) => {
    const { email, otp } = req.body
    if (!email || !otp) return res.status(400).json({ message: "please enter email and otp", success: false })
    try {
        const isExistOtp = await Otp.findOne({ email })
        if (!isExistOtp) return res.status(400).json({ message: "otp not found", success: false })

        if (isExistOtp.otp === otp) {
            res.status(200).json({ success: true, message: "otp verified successfully" })
            await Otp.deleteOne({ email })
        } else
            res.status(200).json({ success: true, message: " verified failed" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "error to verfy otp ", success: false })
    }
}