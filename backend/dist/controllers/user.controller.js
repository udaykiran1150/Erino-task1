"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.addUser = void 0;
const user_service_1 = require("../services/user.service");
const user_service_2 = require("../services/user.service");
const user_validator_1 = require("../validations/user.validator");
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = user_validator_1.createUserSchema.parse(req.body);
        const user = yield (0, user_service_2.createUser)(input);
        return res.status(200).json({
            success: true,
            message: "Created user successfully",
            user: user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addUser = addUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getUsers)();
        return res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.controller.js.map