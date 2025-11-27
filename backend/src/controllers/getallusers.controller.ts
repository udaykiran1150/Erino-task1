import { Request,Response,NextFunction } from "express";
import { getUsers } from "../services/user.service";

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};