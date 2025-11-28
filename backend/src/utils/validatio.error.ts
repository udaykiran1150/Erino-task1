import { Response } from "express";

export const validationError = (error: any, res: Response) => {
  const issue = error.issues[0];
  return res.status(400).json({
    success: false,
    message: issue.message,
  });
};