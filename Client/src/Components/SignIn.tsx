import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { login } from "../api/authApi";
import { toast } from "react-toastify";
const SignIn: React.FC = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const BackendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
      console.log(formData);
      const response = await login(formData);
      console.log(response.data);
      if(response?.data?.success)
      {
       navigate("/home");
      }
     
    
      toast.success(response?.data?.message);
    } catch (error) {
  console.log("error occured");
      console.log("Error", error);
    //   toast.error(error?.response?.data?.message);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <div>
          <p
            className="text-blue-500 hover:underline hover:pointer"
            onClick={() => navigate("/sign-up")}
          >
            Create Account
          </p>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white rounded-2xl p-3 hover:bg-purple-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
