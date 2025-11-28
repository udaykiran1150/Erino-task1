import { Response } from "express";
import bcrypt from "bcrypt"
import { ERROR_MESSAGES } from "./error.constants";

export const setAuthCookies = (res: Response, access: string, refresh: string) => {
  res.cookie("access_token", access, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, 
  });

  res.cookie("refresh_token", refresh, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 14 * 24 * 60 * 60 * 1000, 
  });
};


export const isPasswordMatched=async(inputPassword:string,userPassword:string)=>
{
  try {
    const match=await bcrypt.compare(inputPassword, userPassword);
    if(!match)
    {
      throw ERROR_MESSAGES.AUTH.PASSWORD_MISMATCH
    }
    return 
  } catch (error) {
    console.log(error)
    throw error
  }
    
}

export const hashPassword=async(password:string)=>
{
   try {
     return await bcrypt.hash(password,10);
   } catch (error) {
     throw error
   }
}