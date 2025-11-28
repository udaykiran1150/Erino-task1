import { Request,Response,NextFunction } from "express";
import { createUserSchema } from "../validations/user.validator";
import { createUser, createUserByAdmin } from "../services/user.service";
import { CustomRequest } from "../types/user";
import Tenant from "../models/tenent.model";
import User from "../models/user.model";
import { getAdmin } from "../services/user.service";

export const createUserController = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {

     const {full_name,email,password,role,tenant_name}=req.body;
    const input = createUserSchema.parse(req.body);
    const admin=await getAdmin(req.user.id)
    const tenant_id=admin.tenant_id
    const user = await createUserByAdmin(input,tenant_name,tenant_id);
    return res.status(200).json({
      success: true,
      message: "Created user successfully",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};