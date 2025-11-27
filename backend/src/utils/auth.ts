import { Response } from "express";

export const setAuthCookies = (res: Response, access: string, refresh: string) => {
  res.cookie("access_token", access, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, 
  });

  res.cookie("refresh_token", refresh, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 14 * 24 * 60 * 60 * 1000, 
  });
};