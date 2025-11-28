import { loginSchema } from "../validations/user.validator";
import { Request, Response } from "express";
import { getUserByEmail } from "./user.service";
import { ERROR_MESSAGES } from "../utils/error.constants";
import { generateAccessToken } from "../utils/jwt.token";
import { generateRefreshToken } from "../utils/jwt.token";
import { createTokens } from "./tokens";
import { setAuthCookies } from "../utils/auth";
import { isPasswordMatched } from "../utils/auth";
import { createUser } from "./user.service";
import { createUserSchema } from "../validations/user.validator";

export const signInService = async (req: Request, res: Response) => {
  try {
    const input = loginSchema.parse(req.body);
    const user = await getUserByEmail(input.email);
    console.log(user)
    if (!user) throw ERROR_MESSAGES.AUTH.USER_NOT_FOUND;
    await isPasswordMatched(input.password,user.password)
    // console.log(user)
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
    return { user };
  } catch (error) {
    throw error;
  }
};


export const signUpService=async(req:Request,res:Response)=>
{
    try {
      const input = createUserSchema.parse(req.body);
      const { user, tenant } = await createUser(input,req.body.tenant_name);
      const access_token = generateAccessToken({
      id: user.id,
      email: user.email,
      role: user.role,
      tenant_id: user.tenant_id, 
    });
    const refresh_token = generateRefreshToken({
      id: user.id,
      email: user.email,
      role: user.role,
      tenant_id: user.tenant_id,
    });
    const tokens = await createTokens({
      user_id: user.id,
      token_encrypted: refresh_token,
    });

    return {user,tenant}
    } catch (error) {
       throw error
    }
}
