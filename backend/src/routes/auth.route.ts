import express from "express";
import { signInController } from "../controllers/signIn.controller";
import { singUpController } from "../controllers/signUp.controller";
const authRouter = express.Router();
authRouter.post("/sign-up", singUpController);
authRouter.post("/sign-in", signInController);

export default authRouter;
