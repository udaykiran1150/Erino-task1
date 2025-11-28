import Tokens from "../models/refreshtokens.model";
import { CreateTokenInputs,TokenTypes } from "../types/tokens";
import bcrypt from "bcrypt";
import { Response } from "express";
import { CustomResponse } from "../types/cutomTypes";

export const createTokens = async (payload: CreateTokenInputs) => {
  try {
    const hashedToken = await bcrypt.hash(payload.token_encrypted, 10);
    const token = await Tokens.create({
      user_id: payload.user_id,
      token_encrypted: hashedToken,
      expires_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      login_at: new Date(),
    });


    return token;
  } catch (error) {
    throw error;
  }
};

export const clearTokens=async(res:CustomResponse)=>
{
   try {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    return 
   } catch (error) {
     throw error
   }
}
