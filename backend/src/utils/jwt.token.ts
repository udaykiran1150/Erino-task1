import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export const generateRefreshToken=(payload:object)=>
{

  return jwt.sign(payload,process.env.REFRESH_SECRET,{expiresIn:process.env.REFRESH_EXPIRATION})
}
export const generateAccessToken=(payload:object)=>
{
  return jwt.sign(payload,process.env.ACCESS_SECRET,{expiresIn:process.env.ACCESS_EXPIRATION})
}

export const verifyToken=(token: string)=>
{
    try {
        return jwt.verify(token,process.env.ACCESS_SECRET)
    } catch (error) {
        throw error
    }
}

