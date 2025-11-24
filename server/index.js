import express from 'express';
import sequelize from './Config/sequelize.js';
import UserRouter from './Routes/UserRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors(
  {
    origin:'http://localhost:5173',
  }
));

const PORT = process.env.PORT || 3000;

app.use('/api/v1/user',UserRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});