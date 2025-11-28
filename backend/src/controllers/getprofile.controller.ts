import { Request,Response,NextFunction } from "express";
import { getUserByEmail } from "../services/user.service";
import { ERROR_MESSAGES } from "../utils/error.constants";
import { CustomRequest } from "../types/cutomTypes";

export const getProfileController = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userEmail = req.user?.email;
    const user = await getUserByEmail(userEmail);
    if (!user) {
      throw ERROR_MESSAGES.AUTH.USER_NOT_FOUND;
    }
    return res.status(200).json({
      success: true,
      message: "User profile fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};