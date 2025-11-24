"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const validate_1 = require("../middlewares/validate");
const user_schema_1 = require("../validations/user.schema");
const UserRoute = express_1.default.Router();
UserRoute.post("/user/add-user", (0, validate_1.validate)(user_schema_1.CreateUserSchema), user_controller_1.Adduser);
UserRoute.get("/user/get-all-users", user_controller_1.GetAllUsers);
exports.default = UserRoute;
//# sourceMappingURL=user.route.js.map