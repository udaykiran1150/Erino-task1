import { Request,Response,NextFunction } from "express";
import { getUserByEmail } from "../services/user.service";
import { createTenantSchema, loginSchema } from "../validations/user.validator";
import { ERROR_MESSAGES } from "../utils/error.constants";
import bcrypt from "bcrypt"
import { generateAccessToken } from "../utils/jwt.token";
import { generateRefreshToken } from "../utils/jwt.token";
import { createTokens } from "../services/tokens";
import { createUserSchema } from "../validations/user.validator";
import { createUser } from "../services/user.service";

export const singUpController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {full_name,email,password,role,tenant_name}=req.body;
    const input = createUserSchema.parse(req.body);
    const {user,tenant} = await createUser(input,tenant_name);
    const access_token = generateAccessToken({
      id: user.id,
      email: user.email,
      role:user.role,
      tenant_id:user.tenant_id
      
    });
    const refresh_token = generateRefreshToken({
      id: user.id,
      email: user.email,
      role:user.role,
      tenant_id:user.tenant_id
    });
    const tokens = await createTokens({
      user_id: user.id,
      token_encrypted: refresh_token,
     
    });
    return res.status(200).json({
      success: true,
      message: "user Created Successfully",
      data: { user,tenant, access_token, refresh_token },
    });
  } catch (error) {
    next(error);
  }
};