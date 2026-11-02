import React, { useState } from 'react'
import axios from 'axios'
import { URL } from '../constant'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")

  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)


  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault()

    try {

      const response = await axios.post(
        `${URL}/otp/send`,
        { email },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log(response.data)

      if (response.data.success) {
        setOtpSent(true)
        toast.success(response.data.message)
      }

    } catch (error) {

      console.log(
        error.response?.data?.message || error.message
      )

      toast.error(
        error.response?.data?.message || "Failed to send OTP"
      )
    }
  }


  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault()

    try {

      const response = await axios.post(
        `${URL}/otp/verify`,
        { email, otp },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log(response.data)

      if (response.data.success) {
        setOtpVerified(true)
        toast.success(response.data.message)
      }

    } catch (error) {

      console.log(
        error.response?.data?.message || error.message
      )

      toast.error(
        error.response?.data?.message || "Failed to verify OTP"
      )
    }
  }


  // Login
  const handleLogin = async (e) => {
    e.preventDefault()

    try {

      const response = await axios.post(
        `${URL}/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log(response.data)

      if (response.data.success) {
        toast.success(response.data.message)
        navigate('/dashboard')
      }

    } catch (error) {

      console.log(
        error.response?.data?.message || error.message
      )

      toast.error(
        error.response?.data?.message || "Login failed"
      )
    }
  }


  // Change Email
  const handleChangeEmail = () => {

    setEmail("")
    setOtp("")
    setOtpSent(false)
    setOtpVerified(false)

  }


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Login
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>


        {/* ================= EMAIL STEP ================= */}

        {!otpSent && !otpVerified && (

          <div>

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send OTP
            </button>

          </div>

        )}


        {/* ================= OTP STEP ================= */}

        {otpSent && !otpVerified && (

          <div className="space-y-5">

            {/* Email Display */}

            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">

              <p className="text-sm text-gray-500">
                OTP sent to
              </p>

              <p className="font-medium text-gray-800">
                {email}
              </p>

            </div>


            {/* OTP */}

            <div>

              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter OTP
              </label>

              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center tracking-widest outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>


            {/* Verify OTP */}

            <button
              type="button"
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Verify OTP
            </button>


            {/* Change Email */}

            <button
              type="button"
              onClick={handleChangeEmail}
              className="w-full text-blue-600 font-medium text-sm hover:underline"
            >
              Change Email
            </button>

          </div>

        )}


        {/* ================= PASSWORD STEP ================= */}

        {otpVerified && (

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* Success */}

            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              ✓ OTP verified successfully
            </div>


            {/* Password */}

            <div>

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>


            {/* Login */}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

        )}


        {/* ================= REGISTER ================= */}

        <p className="text-center text-sm text-gray-500 mt-6">

          Don't have an account?{' '}

          <button
            type="button"
            onClick={() => navigate('/register')}
            className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
          >
            Register
          </button>

        </p>

      </div>

    </div>

  )
}

export default Login