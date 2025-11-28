import { Request,Response,NextFunction } from "express";
import { signInService } from "../services/auth.service";


export const signInController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
     const {user}=await signInService(req,res)
     return res.status(200).json({
      success: true,
      message: "User Login Successfully",
      data: { user},
    });
  } catch (error) {
    next(error);
  }
};