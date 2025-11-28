import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Loader from './loaders/Loader';
import api from '../api/axiosClient';

const Home:React.FC = () => {
    const [loading,setLoading]=React.useState<boolean>(true);
    const [userData,setUserData]=React.useState<any>(null);

    const getWhoLoggedIn=async()=>{
        const BackendUrl = import.meta.env.VITE_BACKEND_URL;
        try {
            setLoading(true);
           const response = await api.get("/api/v1/auth/profile")
     
            setUserData(response.data.data);
            setLoading(false);
        } catch (error: any) {

            toast.error(error?.response?.data?.message);
            setLoading(false);
        }
    }
    useEffect(()=>{
        getWhoLoggedIn();
    },[])

if(loading)
{
    return <Loader/>
}
   
  return (
    
    <div className='flex flex-col justify-center items-center h-screen'>
       
        <h1 className='text-3xl font-bold'>Hi  {userData?.full_name}, Welcome to Home Page{}</h1>    

    </div>
  )
}

export default Home
