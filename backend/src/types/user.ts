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



export interface TenantAttributes{
  id:string,
  tenant_name:string,
  created_at:Date,
  updated_at:Date
  created_by:string
  updated_by: string;

}
