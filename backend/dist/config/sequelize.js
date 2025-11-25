"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const POST_URL = process.env.POSTGRES_URL;
const sequelize = new sequelize_1.Sequelize("erino", "postgres", "password", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false,
    dialectOptions: {
        ssl: false,
    },
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map