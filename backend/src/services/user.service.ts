
import User from "../models/user.model";

interface userProps{
    full_name:string,
    email:string,
    password:string,
}

export const CreateUser=async(data:userProps)=>
{
     const {full_name,email,password}=data;
     const user=await User.create({
        full_name,
        email,
        password
     })

     return user;
}