import React from 'react';
import Login from './Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import DoctorList from './pages/Admin/DoctorList';
import AddDoctor from './pages/Admin/AddDoctor';
import AllAppointments from './pages/Admin/AllAppointments';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctors/DoctorDashboard';
import DoctorAppointments from './pages/Doctors/DoctorAppointments';
import DoctorProfile from './pages/Doctors/DoctorProfile';

const App = () => {

  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className=' bg-white'>

      <ToastContainer />
      <Navbar />
      <div className='flex items-start' >
        <Sidebar />
        <Routes>
          {/* login route for both admin and doctor */}
          <Route path='/' element={<></>} />
          {/* Admin routes */}
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/doctors-list' element={<DoctorList />} />
          <Route path='/add-doctors' element={<AddDoctor />} />
          <Route path='/all-appointments' element={<AllAppointments />} />

          {/* Doctors routes */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
          <Route path='/doctor-appointments' element={<DoctorAppointments />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App