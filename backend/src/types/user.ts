import { Request, CookieOptions, Response } from "express";

export interface UserProps {
  full_name: string;
  email: string;
  password: string;
  role:string
}
export interface UserAttributes {
  id: string;
  full_name: string;
  email: string;
  password: string;
  tenant_id:string,
  role:string,
  created_at?: Date;
  updated_at?: Date;
}

export interface CustomRequest extends Request {
  user?: { id: string; email: string,role:string,created_by_user_id:string,tenant_id:string };
}

export interface CustomResponse extends Response {
  clearCookie(name: string, options?: CookieOptions): this;
  status(code: number): this;
  json(body: object): this;
}

export interface TenantAttributes{
  id:string,
  tenant_name:string,
  created_at:Date,
  updated_at:Date
  created_by:string
  updated_by: string;

}
