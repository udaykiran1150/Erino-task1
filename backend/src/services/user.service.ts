import User from "../models/user.model";
import UserService from "../validations/user.validate";
import { UserProps } from "../types/user.types";
import { ERROR_MESSAGES } from "../utils/constants"
export const createUser = async (data: UserProps) => {
  try {
    const { full_name, email, password } = data;
    if (await UserService.userExisted(email)) {
      throw ERROR_MESSAGES.USER.USER_ALREADY_EXISTS;
    }
    const user = await User.create({
      full_name,
      email,
      password, 
      
    });
    return user;
  } catch (error) {
   throw error
  }
};

export const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error
  }
};
