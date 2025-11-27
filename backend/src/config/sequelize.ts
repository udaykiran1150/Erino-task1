import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const sequelize = new Sequelize(DB_CONNECTION_STRING, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: false,
  },
});
export default sequelize;
