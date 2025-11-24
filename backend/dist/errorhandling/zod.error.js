"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationError = void 0;
const validationError = (error, res) => {
    const issue = error.issues[0];
    let errorString = "";
    if (error.issues[0].path[1] !== 'email') {
        errorString = `${issue.message} for  ${error.issues[0].path[1]}`;
    }
    else {
        errorString = issue.message;
    }
    return res.status(400).json({
        success: false,
        message: errorString
    });
};
exports.validationError = validationError;
//# sourceMappingURL=zod.error.js.map