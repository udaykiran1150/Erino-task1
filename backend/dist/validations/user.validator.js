"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    full_name: zod_1.z
        .string()
        .min(3, "Full name must be at least 3 characters.")
        .regex(/^[A-Za-z]+$/, "Full name can contain only letters."),
    email: zod_1.z
        .string()
        .email("Please enter a valid email address.")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address."),
    password: zod_1.z
        .string()
        .min(6, "Password must be at least 6 characters.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number."),
});
//# sourceMappingURL=user.validator.js.map