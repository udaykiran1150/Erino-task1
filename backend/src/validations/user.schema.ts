import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        full_name: z
            .string()
            .min(3, "Full name must be at least 3 characters.")
            .regex(/^[A-Za-z]+$/, "Full name can contain only letters."),
        email: z
            .string()
            .email("Please enter a valid email address."),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters.")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
            .regex(/[0-9]/, "Password must contain at least one number."),
    }),
});

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
