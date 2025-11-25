import express,{ NextFunction, Request,Response } from 'express';
import { ZodError } from 'zod';
import sequelize from './config/sequelize';
import userRoute from './routes/user.route';
import cors from "cors"
import { validationError } from './utils/constants';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => {
    console.error("Error at connecting Database:", err.message);
  });

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});

app.use("/api/v1/user",userRoute)


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError)return validationError(err,res);
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

app.listen(port, () => {
  return console.log(`Express  listening at http://localhost:${port}`);
});




