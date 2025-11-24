"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExistedError = exports.userServiceErrors = void 0;
const userServiceErrors = (err, res) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message || "User Service Error"
    });
};
exports.userServiceErrors = userServiceErrors;
const userExistedError = (res) => {
    return res.status(409).json({ success: false, message: "Allready user exists with this email " });
};
exports.userExistedError = userExistedError;
//# sourceMappingURL=user.errors.js.map