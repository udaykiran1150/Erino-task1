import { loginSchema } from "../validations/user.validator";
import { Request, Response } from "express";
import { getUserByEmail } from "./user.service";
import { ERROR_MESSAGES } from "../utils/error.constants";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/jwt.token";
import { generateRefreshToken } from "../utils/jwt.token";
import { createTokens } from "./tokens";
import { setAuthCookies } from "../utils/auth";

export const signInService = async (req: Request, res: Response) => {
  try {
    const input = loginSchema.parse(req.body);
    const user = await getUserByEmail(input.email);
    if (!user) throw ERROR_MESSAGES.AUTH.USER_NOT_FOUND;
    const isMatch = await bcrypt.compare(input.password, user.password);
    if (!isMatch) throw ERROR_MESSAGES.AUTH.PASSWORD_MISMATCH;
    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email,
      role: user.role,
      tenant_id: user.tenant_id,
    });
    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
      role: user.role,
      tenant_id: user.tenant_id,
    });
    await createTokens({ user_id: user.id, token_encrypted: refreshToken });
    setAuthCookies(res, accessToken, refreshToken);
    return { user, accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};
