import { Request,Response,NextFunction } from "express";
import { createUserSchema } from "../validations/user.validator";
import { createUser } from "../services/user.service";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input = createUserSchema.parse(req.body);
    const user = await createUser(input);
    return res.status(200).json({
      success: true,
      message: "Created user successfully",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};