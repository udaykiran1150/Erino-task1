"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        full_name: zod_1.z.string().min(3, "Atleast 3 character are required"),
        email: zod_1.z.string().email("Invalid Email"),
        password: zod_1.z.string().min(6, "minimum 6 characters are required")
    })
});
//# sourceMappingURL=user.schema.js.map