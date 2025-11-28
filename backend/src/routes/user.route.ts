import express from "express";
import { logoutController } from "../controllers/signOut.controller";
import { getProfileController } from "../controllers/getprofile.controller";
import { getAllUsersController } from "../controllers/getallusers.controller";

const userRoute = express.Router();
userRoute.get("/profile",getProfileController)
userRoute.get("/logout",logoutController)
userRoute.get("/get-all-users",getAllUsersController)

export default userRoute;

