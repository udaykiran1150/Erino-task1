import { Response,NextFunction } from "express";
import { getUsers } from "../services/user.service";
import { CustomRequest } from "../types/user";

export const getAllUsersController = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsers(req.user.id);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};