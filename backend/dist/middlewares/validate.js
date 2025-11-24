"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
        });
        next();
    }
    catch (error) {
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
            errors: errorString
        });
    }
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map