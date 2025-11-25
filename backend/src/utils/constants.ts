import { Response } from "express";

export const  ERROR_MESSAGES={
    USER: { 
    USER_ALREADY_EXISTS: {
      status: 409,
      message: "Allready user exists with this email.", 
    },
  }
  
}
export const validationError = (error: any,res:Response) => {
  const issue = error.issues[0];
    return res.status(400).json({
      success: false,
      message: issue.message,
    });
        
};