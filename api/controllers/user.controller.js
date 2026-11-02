import { User } from "../models/User.schema.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    const { name, email, password } = req.body
    if (!email || !name || !password) return res.status(404).json({ message: "all fields are required ", success: false })
    try {

        const isExist = await User.findOne({ email })
        if (isExist) return res.status(400).json({ message: "user is already registed ", success: false })

        const hassPass = await bcrypt.hash(password, 10)
        await User.create({ email, password: hassPass, name })
        return res.status(201).json({ success: true, message: "user registerd success" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "registration failed`", success: false })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(404).json({ message: "all fields are required ", success: false })
    try {

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: "user not found", success: false })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(201).json({ success: false, message: "invalid credentials", })

        return res.status(201).json({ success: true, message: "user login success", })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "login failed`", success: false })
    }
}
