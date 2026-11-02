import { configDotenv } from 'dotenv'
import nodemailer from 'nodemailer'
configDotenv()

const EMAIL = process.env.EMAIL
const PASS = process.env.PASSWORD

export const sendOtpToEmail = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASS
            }
        })

        const mailOption = ({
            from: EMAIL, // sender address
            to: email, // list of recipients
            subject: "Auth Service Verification Email", // subject line
            text: "your otp is", // plain text body
            html: `<h2>Verify OTP to access Account</h2><p><b>Your OTP is:</b> ${otp}</p>`,
        })
        await transporter.sendMail(mailOption)
        console.log("mail sent")
    } catch (error) {
        console.log(error)
    }
}
