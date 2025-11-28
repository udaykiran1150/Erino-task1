import { NextFunction, Request } from "express";
import { clearTokens } from "../services/tokens";
import { CustomResponse } from "../types/cutomTypes";

export const logoutController = async (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  try {
   
    clearTokens(res);
    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};
