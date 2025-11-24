import express, { Request, Response, NextFunction } from "express"
import UserService from "../validations/user.existed"

import User from "../models/user.model";

import { CreateUser } from "../services/user.service";

export const Adduser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { full_name, email, password } = req.body;
        if (!full_name || !email || !password) {
            return next({
                status: 400,
                message: "Please enter all the details"
            });
        }
        const user=await CreateUser({full_name,email,password},next);
        console.log("user created",user)
        return res.status(200).json({success:true,message:"Created user successfull",user:user})

    } catch (error) {
        next(error)
    }
}


export const GetAllUsers=async(req:Request,res:Response,next:NextFunction)=>
{
    try {
        const users=await  User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

