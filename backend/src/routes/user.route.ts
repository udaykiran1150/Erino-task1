import express from "express"
import { addUser, getAllUsers } from "../controllers/user.controller";

const userRoute = express.Router();
userRoute.post("/", addUser);
userRoute.get("/", getAllUsers);

export default userRoute;