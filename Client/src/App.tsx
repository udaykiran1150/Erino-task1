import React from 'react'
import SignUp from './Components/SignUp'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from './Components/SignIn';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
const App = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <ToastContainer/>
    
     <Routes>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
    </div>
  )
}

export default App