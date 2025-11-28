import { createUserController } from "../controllers/createUser.controller";
import { authenticateUser } from "../middleware/auth";
import { authorizeRoles } from "../middleware/authorizeRoles";
import express from "express";

const adminRouter=express.Router();


adminRouter.post('/create-user',createUserController)

export default adminRouter
