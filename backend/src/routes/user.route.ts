import express from "express"
import { addUser, getAllUsers } from "../controllers/user.controller";

import { validate } from '../middlewares/validate'
import { createUserSchema } from "../validations/user.schema";
const userRoute = express.Router();
userRoute.post("/", addUser);
userRoute.get("/", getAllUsers);

export default userRoute;