import express,{ NextFunction, Request,Response } from 'express';
import { ZodError } from 'zod';
import * as z from "zod";
import sequelize from './config/sequelize';
import userRoute from './routes/user.route';
import cors from "cors"
import { validationError } from './errorhandling/zod.error';
const app = express();
const port = 3000;


sequelize.authenticate()
.then(()=>console.log("Database Connected Successfully"))
.catch(()=>console.log("Error at connecting Database"))

app.use(cors());
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});
app.use(express.json());
app.use("/api/v1/user",userRoute)


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
     return validationError(err,res);
  }
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

app.listen(port, () => {
  return console.log(`Express  listening at http://localhost:${port}`);
});




