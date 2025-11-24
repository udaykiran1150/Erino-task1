import {Request,Response,NextFunction} from "express";

import { ZodObject, ZodError } from "zod";

export const validate=(schema:ZodObject)=>(req:Request,res:Response,next:NextFunction)=>
{
    try {
        schema.parse({
            body:req.body,
        })
        next();
    } catch (error) {
       const issue = error.issues[0];
  return res.status(400).json({
    success: false,
    errors: issue.message
  });

      next(error);
        
    }
}
