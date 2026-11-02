import React from 'react'
import { URL } from '../constant'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const register = async (e) => {
        e.preventDefault()

        try {

            const response = await axios.post(
                `${URL}/user/register`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/')
            }

            console.log(response)

        } catch (error) {

            console.log(
                error.response?.data?.message || error.message
            )

            toast.error(
                error.response?.data?.message || "Registration failed"
            )
        }
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create an Account
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Register to get started
                </p>


                <form
                    className="space-y-5"
                    onSubmit={register}
                >

                    {/* Name */}

                    <div>

                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Email */}

                    <div>

                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

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
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Register */}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Register
                    </button>

                </form>


                {/* Login */}

                <p className="text-center text-sm text-gray-500 mt-6">

                    Already have an account?{' '}

                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
                    >
                        Login
                    </button>

                </p>

            </div>

        </div>
    )
}

export default Register