import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

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

sequelize.authenticate()
  .then(() => console.log("Connected to PostgreSQL!"))
  .catch(err => console.error("Connection failed:", err));
 
export default sequelize;