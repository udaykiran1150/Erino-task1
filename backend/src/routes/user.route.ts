import express from "express"
import { Adduser, GetAllUsers } from "../controllers/user.controller";

import { validate } from '../middlewares/validate'
import { CreateUserSchema } from "../validations/user.schema";


const UserRoute = express.Router();


UserRoute.post("/user/add-user", validate(CreateUserSchema), Adduser);
UserRoute.get("/user/get-all-users", GetAllUsers);

export default UserRoute;