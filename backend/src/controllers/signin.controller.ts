import { Request,Response,NextFunction } from "express";
import { getUserByEmail } from "../services/user.service";
import { loginSchema } from "../validations/user.validator";
import { ERROR_MESSAGES } from "../utils/error.constants";
import bcrypt from "bcrypt"
import { generateAccessToken } from "../utils/jwt.token";
import { generateRefreshToken } from "../utils/jwt.token";
import { createTokens } from "../services/tokens";
import { setAuthCookies } from "../utils/auth";



export const signInController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input = loginSchema.parse(req.body);
    const user = await getUserByEmail(input.email);
    if (!user) {
      throw ERROR_MESSAGES.AUTH.USER_NOT_FOUND;
    }
    const isMatch = await bcrypt.compare(input.password, user.password);
    if (!isMatch) {
      throw ERROR_MESSAGES.AUTH.PASSWORD_MISMATCH;
    }
    const accessToken = generateAccessToken({ id: user.id, email: user.email });
    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
    });
    await createTokens({ user_id: user.id, token_encrypted: refreshToken });
    setAuthCookies(res, accessToken, refreshToken);
    return res.status(200).json({
      success: true,
      message: "User Login Successfully",
      data: { user, accessToken, refreshToken },
    });
  } catch (error) {
    next(error);
  }
};