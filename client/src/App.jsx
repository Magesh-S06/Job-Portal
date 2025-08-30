import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Home from './pages/Home'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import { useAppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import ManageJobs from './pages/ManageJobs'
import ViewApplications from './pages/ViewApplications'
import 'quill/dist/quill.snow.css'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const {showRecruiterLogin} = useAppContext()
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/apply-job/:id' element={<ApplyJob />}/>
      <Route path='/applications' element={<Applications />}/>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='add-job' element={<AddJob />} />
        <Route path='manage-job' element={<ManageJobs />} />
        <Route path='view-applications' element={<ViewApplications />} />
      </Route>
      </Routes>
    </div>
  )
}

export default App
