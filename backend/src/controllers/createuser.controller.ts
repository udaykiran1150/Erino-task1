import { Request,Response,NextFunction } from "express";
import { createUserSchema } from "../validations/user.validator";
import { createUser, createUserByAdmin } from "../services/user.service";
import { CustomRequest } from "../types/cutomTypes";
export const createUserController = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
     const {full_name,email,password,role}=req.body;
     const input = createUserSchema.parse(req.body); 
     const user = await createUserByAdmin(input,req.user.tenant_id);
    return res.status(201).json({
      success: true,
      message: "Created user successfully",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};