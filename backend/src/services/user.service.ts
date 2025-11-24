
import User from "../models/user.model";
import UserService from "../validations/user.existed"
import { NextFunction } from "express";
import { userProps } from "../types/user.types";
export const CreateUser = async (data: userProps, next: NextFunction) => {
    const { full_name, email, password } = data;
    if (await UserService.userExisted(email)) {
        return next({ status: 409, message: "User Already existed with this email" })
    }
    const user = await User.create({ 
        full_name,
        email,
        password
    })
    return user;
}
