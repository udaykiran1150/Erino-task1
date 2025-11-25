import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()
const sequelize = new Sequelize(
  "erino",
  "postgres",
  "password",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false,
    dialectOptions: {
      ssl: false,
    },
  }
); 


export default sequelize;