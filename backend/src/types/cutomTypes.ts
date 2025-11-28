import { Request,Response,CookieOptions } from "express";

export interface CustomRequest extends Request {
  user?: { id: string; email: string,role:string,tenant_id:string };
}

export interface CustomResponse extends Response {
  clearCookie(name: string, options?: CookieOptions): this;
  status(code: number): this;
  json(body: object): this;
}