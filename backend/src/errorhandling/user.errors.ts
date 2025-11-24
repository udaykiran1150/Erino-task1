import { Response } from "express";
import { success } from "zod";

export const  userServiceErrors=(err:any,res:Response)=>{
     return res.status(err.status || 500).json({
       success: false,
       message: err.message || "User Service Error"
  });
}

export const userExistedError=(res:Response)=>
{
     return res.status(409).json({success:false,message:"Allready user exists with this email "})
}

