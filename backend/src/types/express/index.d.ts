

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string };
    }
    interface Response{
      clearCookie?:{}
    }
  }
}
export {};


export  interface CustomTypes {
    
}