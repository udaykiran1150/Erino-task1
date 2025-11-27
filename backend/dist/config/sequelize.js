"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const sequelize = new sequelize_1.Sequelize(DB_CONNECTION_STRING, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: false,
    },
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map