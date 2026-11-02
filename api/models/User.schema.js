import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otpId: { type: mongoose.Schema.Types.ObjectId, ref: "Otp"}

})

export const User = mongoose.model("User", userSchema)