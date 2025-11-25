import React from 'react'
import axios from 'axios';
import {toast} from "react-toastify"
interface FormTypes {
  full_name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = React.useState<FormTypes>({
    full_name: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const BackendUrl=import.meta.env.VITE_BACKEND_URL;
    try {
      console.log(formData);
      const response = await axios.post(`${BackendUrl}/api/v1/user`, formData);
      console.log(response.data)
      toast.success(response?.data?.message);

    } catch (error:any) {
      
      console.log("Error",error?.response?.data?.errors)
      toast.error(error?.response?.data?.errors)
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border p-6 rounded-lg shadow-lg w-80"
    >

      <div>
        <p>Enter Name</p>
        <input
          type="text"
          name="full_name"
          placeholder="Enter Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <p>Enter Email</p>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <p>Enter Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-purple-500 text-white rounded-2xl p-3 hover:bg-purple-600"
      >
        Submit
      </button>

    </form>
  );
};

export default SignUp;
