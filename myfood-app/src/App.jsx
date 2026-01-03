import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import Dashboard from './Pages/Customer/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
         <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
