import express, { Request, Response, NextFunction } from "express"
import UserService from "../validations/user.existed"
import { getUsers } from "../services/user.service";

import User from "../models/user.model";

import { createUser } from "../services/user.service";
import { createUserSchema } from "../validations/user.schema";

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsed=createUserSchema.parse({
            body:req.body
        })
        const {full_name,email,password} = parsed.body; 
        const user=await createUser({full_name,email,password},res);
        return res.status(200).json({success:true,message:"Created user successfully",user:user})
    } catch (error) {
        next(error)
    } 
}
export const getAllUsers=async(req:Request,res:Response,next:NextFunction)=>
{
    try {
        const users=await getUsers(res)
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

