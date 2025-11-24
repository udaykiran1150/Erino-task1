import express,{ NextFunction, Request,Response } from 'express';
import * as z from "zod";
import sequelize from './config/sequelize';
import UserRoute from './routes/user.route';
import cors from "cors"
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
app.use("/api/v1",UserRoute)


app.use((err:any,req:Request,res:Response,next:NextFunction)=>
{
    res.status(err.status||500).json({
        success:false,
        message:err.message||"internal server error",
      
    })
})
app.listen(port, () => {
  return console.log(`Express  listening at http://localhost:${port}`);
});




