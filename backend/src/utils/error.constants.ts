import { Response } from "express";

export const ERROR_MESSAGES = {
  USER: {
    USER_ALREADY_EXISTS: {
      status: 409,
      message: "Allready user exists with this email.",
    },
  },
  AUTH:{
    MISSING_ACCESS_TOKEN:{
      status:401,
      message :"No Access Token Provided"
    }
    ,
    MISSING_REFRESH_TOKEN:{
      status:401,
      message :"No Access Token Provided"
    },
    INVALID_REFRESH_TOKEN:{
      status:401,
      message :"No Access Token Provided"
    },
    SESSION_NOT_FOUND:{
      status:401, 
      message:"No Session Found" 
    },
    REFRESH_NOT_MATCH:{ 
      status:401,
      message:"Refresh token doesn't match"
    },
     ACCESS_NOT_MATCH:{
      status:401,
      message:"Acess token doesn't match"
    },
    USER_NOT_FOUND:{
      staus:404,
      message:"User Not Found"
    },
    PASSWORD_MISMATCH:{
      status:401,
      message:"Incorrect password"
    },
    ACCESS_DENIED:{
      status:403,
      message :"You are not allowed to Add new User"
    }
  }
};


