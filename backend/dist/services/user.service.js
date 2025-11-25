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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const user_existed_1 = __importDefault(require("../validations/user.existed"));
const user_errors_1 = require("../errorhandling/user.errors");
const user_errors_2 = require("../errorhandling/user.errors");
const createUser = (data, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { full_name, email, password } = data;
        if (yield user_existed_1.default.userExisted(email)) {
            (0, user_errors_2.userExistedError)(res);
        }
        const user = yield user_model_1.default.create({
            full_name,
            email,
            password
        });
        return user;
    }
    catch (error) {
        (0, user_errors_1.userServiceErrors)(error, res);
    }
});
exports.createUser = createUser;
const getUsers = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.findAll();
        return users;
    }
    catch (error) {
        (0, user_errors_1.userServiceErrors)(error, res);
    }
});
exports.getUsers = getUsers;
//# sourceMappingURL=user.service.js.map