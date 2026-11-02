import React from 'react'

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          MyDashboard
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-gray-600 hidden sm:block">
            Welcome, User
          </span>

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            U
          </div>
        </div>
      </nav>

      <div className="flex">

        {/* Sidebar */}
        <aside className="hidden md:block w-64 min-h-[calc(100vh-73px)] bg-white border-r border-gray-200 p-5">

          <div className="space-y-2">

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium"
            >
              <span>🏠</span>
              Dashboard
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            >
              <span>👤</span>
              Profile
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            >
              <span>📊</span>
              Analytics
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            >
              <span>⚙️</span>
              Settings
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            >
              <span>🚪</span>
              Logout
            </a>

          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500 mt-1">
              Here's what's happening with your account.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Total Orders
                  </p>

                  <h3 className="text-3xl font-bold text-gray-800 mt-2">
                    120
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-xl">
                  🛒
                </div>
              </div>

              <p className="text-sm text-green-600 mt-4">
                ↑ 12% this month
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Total Spent
                  </p>

                  <h3 className="text-3xl font-bold text-gray-800 mt-2">
                    $2,450
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-xl">
                  💰
                </div>
              </div>

              <p className="text-sm text-green-600 mt-4">
                ↑ 8% this month
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Pending Orders
                  </p>

                  <h3 className="text-3xl font-bold text-gray-800 mt-2">
                    8
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-xl">
                  ⏳
                </div>
              </div>

              <p className="text-sm text-yellow-600 mt-4">
                3 arriving today
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Wishlist
                  </p>

                  <h3 className="text-3xl font-bold text-gray-800 mt-2">
                    24
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-xl">
                  ❤️
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Items saved
              </p>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">

              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  Recent Orders
                </h3>

                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">

                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-sm font-medium text-gray-500">
                        Order
                      </th>

                      <th className="px-6 py-4 text-sm font-medium text-gray-500">
                        Date
                      </th>

                      <th className="px-6 py-4 text-sm font-medium text-gray-500">
                        Amount
                      </th>

                      <th className="px-6 py-4 text-sm font-medium text-gray-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="border-t">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        #ORD-1001
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        Oct 5, 2026
                      </td>

                      <td className="px-6 py-4 text-gray-800">
                        $120
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          Completed
                        </span>
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        #ORD-1002
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        Oct 4, 2026
                      </td>

                      <td className="px-6 py-4 text-gray-800">
                        $85
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        #ORD-1003
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        Oct 2, 2026
                      </td>

                      <td className="px-6 py-4 text-gray-800">
                        $250
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          Shipped
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">

              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                My Profile
              </h3>

              <div className="flex flex-col items-center">

                <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-4">
                  U
                </div>

                <h4 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  john@example.com
                </p>

                <button className="mt-6 w-full border border-blue-600 text-blue-600 py-2.5 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition">
                  Edit Profile
                </button>

              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  )
}

export default UserDashboard