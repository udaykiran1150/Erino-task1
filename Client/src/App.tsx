import React from 'react'
import SignUp from './Components/SignUp'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <ToastContainer/>
      <SignUp />
    </div>
  )
}

export default App