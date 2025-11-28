import express from "express";
import { signInController } from "../controllers/signin.controller";
import { singUpController } from "../controllers/signup.controller";
const authRouter = express.Router();
authRouter.post("/sign-up", singUpController);
authRouter.post("/sign-in", signInController);

export default authRouter;
