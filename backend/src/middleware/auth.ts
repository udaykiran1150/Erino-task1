import bcrypt from "bcrypt";
import { verifyToken } from "../utils/jwt.token";
import { NextFunction, Request, Response } from "express";
import { ERROR_MESSAGES } from "../utils/error.constants";
import { refresh } from "../utils/refreshtoken";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = req.cookies?.access_token;
    if (!accessToken) {
      throw ERROR_MESSAGES.AUTH.MISSING_ACCESS_TOKEN;
    }

    
    const decoded = await verifyToken(accessToken);
    req.user = decoded;
   
    next();
  } catch (error) {
    next(error);
  }
};
