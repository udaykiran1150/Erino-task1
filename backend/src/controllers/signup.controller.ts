import { Request, Response, NextFunction } from "express";
import { signUpService } from "../services/auth.service";

export const singUpController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const {user,tenant}=await signUpService(req,res);
    return res.status(201).json({
      success: true,
      message: "user Created Successfully",
      data: { user, tenant },
    });
  } catch (error) {
    next(error);
  }
};
