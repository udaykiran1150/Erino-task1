import express from "express";
import { logoutController } from "../controllers/logout.controller";
import { getProfileController } from "../controllers/getprofile.controller";

const userRoute = express.Router();
userRoute.get("/profile",getProfileController)
userRoute.get("/logout",logoutController)

export default userRoute;

