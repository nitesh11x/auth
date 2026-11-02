import './App.css'
import UserDashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <BrowserRouter>
         <Toaster />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
