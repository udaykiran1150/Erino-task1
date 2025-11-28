import { where } from "sequelize";
import Tenant from "../models/tenent.model";
import User from "../models/user.model";
import { UserProps } from "../types/user";
import { CustomRequest } from "../types/cutomTypes";
import { ERROR_MESSAGES } from "../utils/error.constants";
import bcrypt from "bcrypt";

export const createUser = async (userData: UserProps, tenant_name: string) => {
  try {
    const { full_name, email, password, role } = userData;
    const userExists = await getUserByEmail(email);
    if (userExists) {
      throw ERROR_MESSAGES.USER.USER_ALREADY_EXISTS;
    }
    const tenant = await Tenant.create({ tenant_name });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      full_name,
      email,
      password: hashedPassword,
      tenant_id: tenant.id,
      role,
    });

    tenant.created_by = user.id;

    await user.save();
    await tenant.save();

    return { user, tenant };
  } catch (error) {
    throw error;
  }
};

export const createUserByAdmin = async (
  userData: UserProps,
  tenant_id: string
) => {
  try {
    const { full_name, email, password, role } = userData;
    const userExists = await getUserByEmailAndTenant(email, tenant_id);
    if (userExists) {
      throw ERROR_MESSAGES.USER.USER_ALREADY_EXISTS;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      full_name,
      email,
      password: hashedPassword,
      tenant_id: tenant_id,
      role,
    });
    return { user };
  } catch (error) {
    throw error;
  }
};

export const getUsers = async (req: CustomRequest) => {
  try {
    const users = await User.findAll({
      where: { tenant_id: req.user.tenant_id },
      attributes: {
        exclude: ["password", "tenant_id"],
      },
    });
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
export const getUserByEmailAndTenant = async (
  email: string,
  tenant_id: string
) => {
  try {
    const user = await User.findOne({ where: { email, tenant_id } });
    return user;
  } catch (error) {
    throw error;
  }
};
