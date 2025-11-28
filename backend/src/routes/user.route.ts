import express from "express";
import { logoutController } from "../controllers/signOut.controller";
import { getProfileController } from "../controllers/getProfile.controller";
import { createUserController } from "../controllers/createUser.controller";
import { getAllUsersController } from "../controllers/getAllUsers.controller";

const userRoute = express.Router();
userRoute.get("/profile",getProfileController)
userRoute.get("/logout",logoutController)
userRoute.post("/create",createUserController);
userRoute.get("/get-all-users",getAllUsersController)

export default userRoute;

