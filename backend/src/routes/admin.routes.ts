import { createUserController } from "../controllers/createuser.controller";
import { authenticateUser } from "../middleware/auth";
import { authorizeRoles } from "../middleware/authorizeroles";
import express from "express";

const adminRouter=express.Router();


adminRouter.post('/create-user',createUserController)

export default adminRouter
