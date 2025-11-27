"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationError = exports.ERROR_MESSAGES = void 0;
exports.ERROR_MESSAGES = {
    USER: {
        USER_ALREADY_EXISTS: {
            status: 409,
            message: "Allready user exists with this email.",
        },
    },
};
const validationError = (error, res) => {
    const issue = error.issues[0];
    return res.status(400).json({
        success: false,
        message: issue.message,
    });
};
exports.validationError = validationError;
//# sourceMappingURL=error.constants.js.map