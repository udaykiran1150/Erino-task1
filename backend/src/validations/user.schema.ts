import {z} from "zod";

export const CreateUserSchema=z.object({
    body:z.object({
        full_name:z.string().min(3,"Atleast 3 character are required"),
        email:z.string().email("Invalid Email"),
        password:z.string().min(6,"minimum 6 characters are required")

    })
})