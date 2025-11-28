import { NextFunction,Request,Response } from "express";
import { verifyToken } from "../utils/jwt.token";
import { clearTokens } from "../services/tokens";
import { CustomResponse } from "../types/user";

export const logoutController = async (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies?.refresh_token;
    if (refreshToken) {
      const decoded: any = verifyToken(refreshToken);
    }
    clearTokens(res);
    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};