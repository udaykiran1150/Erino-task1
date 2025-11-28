import { createUserController } from "../controllers/createuser.controller";
import express from "express";
const adminRouter = express.Router();
adminRouter.post("/create-user", createUserController);

export default adminRouter;
