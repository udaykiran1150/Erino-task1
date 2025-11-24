"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        full_name: zod_1.z.string()
            .min(3, "Atleast 3 character are required")
            .regex(/^[A-Za-z]+$/, "Only letters are needed"),
        email: zod_1.z.string().email("Invalid Email"),
        password: zod_1.z
            .string()
            .min(6, "minimum 6 characters are required")
            .regex(/[A-Z]/, "Capital letters are needed")
            .regex(/[a-z]/, "Small letters are needed")
            .regex(/[0-9]/, "need numbers")
    })
});
//# sourceMappingURL=user.schema.js.map