
import User from "../models/user.model";
import UserService from "../validations/user.existed"
import { UserProps } from "../types/user.types";
import { userServiceErrors } from "../errorhandling/user.errors";
import { Response } from "express";
import { userExistedError } from "../errorhandling/user.errors";

export const createUser = async (data: UserProps, res:Response) => {
    try {
        const { full_name, email, password } = data;
        if (await UserService.userExisted(email)) {
            userExistedError(res);
        }
        const user = await User.create({
            full_name,
            email,
            password
        })
        return user.dataValues;
    } catch (error) {
        userServiceErrors(error,res)
    }
}
 
export const getUsers = async (res:Response) => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        userServiceErrors(error,res)
    }
}


