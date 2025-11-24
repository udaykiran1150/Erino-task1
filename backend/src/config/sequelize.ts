import { Sequelize } from "sequelize";

import dotenv from "dotenv"
dotenv.config()



const POST_URL=process.env.POSTGRES_URL
const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  logging: false, 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});



export default sequelize;