import express, { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import sequelize from "./config/sequelize";
import userRoute from "./routes/user.route";
import cors from "cors";
import { validationError } from "./utils/validation.error";
import authRouter from "./routes/auth.route";
import cookieParser from "cookie-parser"
import { authenticateUser } from "./middleware/auth";
import adminRouter from "./routes/admin.routes";
import { authorizeRoles } from "./middleware/authorizeroles";
import "./models/associations"
const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/user",authenticateUser, userRoute);
app.use("/api/v1/auth",authRouter); 
app.use("/api/v1/admin",authenticateUser,authorizeRoles("admin"),adminRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  
  if (err instanceof ZodError) return validationError(err, res);
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  return console.log(`Express  listening at http://localhost:${port}`);
});
