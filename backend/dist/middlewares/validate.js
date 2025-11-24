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
        return res.status(400).json({
            success: false,
            errors: issue.message
        });
        next(error);
    }
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map