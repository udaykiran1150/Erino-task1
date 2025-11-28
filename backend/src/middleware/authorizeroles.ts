import { NextFunction,Response } from "express";
import { CustomRequest } from "../types/cutomTypes";
import { ERROR_MESSAGES } from "../utils/error.constants";
export const authorizeRoles=(...allowedRoles)=>
{   
   return (req:CustomRequest,res:Response,next:NextFunction)=>
   {    
        
         if (!allowedRoles.includes(req.user.role)) {
         throw ERROR_MESSAGES.AUTH.ACCESS_DENIED
    }
   
    next();
   }
}