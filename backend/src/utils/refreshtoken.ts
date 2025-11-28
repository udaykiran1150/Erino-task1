import { Request,Response,NextFunction } from "express";
import { ERROR_MESSAGES } from "./error.constants";
import  jwt  from "jsonwebtoken"
import { getSavedTokens } from "../services/jwt.service";
import bcrypt from "bcrypt"
import { generateAccessToken } from "./jwt.token";
import { generateRefreshToken } from "./jwt.token";
import { createTokens } from "../services/tokens";
import { setAuthCookies } from "./auth";
import dotenv from "dotenv"
dotenv.config()

export const refresh = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies?.refresh_token;

    if (!refreshToken) throw ERROR_MESSAGES.AUTH.MISSING_REFRESH_TOKEN; //
    let decoded: any;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET!);
    } catch (err: any) {

      return next(err);
    }

    const saved = await getSavedTokens(decoded.id);
    if (!saved) throw ERROR_MESSAGES.AUTH.SESSION_NOT_FOUND;
    const isMatch=await bcrypt.compare(refreshToken,saved.token_encrypted);
    if(!isMatch)  throw ERROR_MESSAGES.AUTH.REFRESH_NOT_MATCH;
    const newAccess = generateAccessToken({
      id: decoded.id,
      email: decoded.email,
    });
    const newRefresh = generateRefreshToken({
      id: decoded.id,
      email: decoded.email,
    });
    await createTokens({ user_id: decoded.id, token_encrypted: newRefresh });
    setAuthCookies(res, newAccess, newRefresh);
    next()
  } catch (err) {
    next(err);
  }
};

