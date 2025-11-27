import User from "../models/user.model";
import { UserProps } from "../types/user";
import { ERROR_MESSAGES } from "../utils/error.constants";
import bcrypt from "bcrypt"

export const createUser = async (data: UserProps) => {
  try {
    const { full_name, email, password } = data;
    const userExists = await getUserByEmail(email);
    if (userExists) {
      throw ERROR_MESSAGES.USER.USER_ALREADY_EXISTS;
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const user = await User.create({
      full_name,
      email,
      password:hashedPassword,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw error;
  }
};

