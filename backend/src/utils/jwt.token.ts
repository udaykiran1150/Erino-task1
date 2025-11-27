import jwt from "jsonwebtoken"
export const generateRefreshToken=(payload:object)=>
{
  return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"14d"})
}
export const generateAccessToken=(payload:object)=>
{
  return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"15m"})
}

export const verifyToken=(token: string)=>
{
    try {
        return jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        throw error
    }
}

