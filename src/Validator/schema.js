import { z } from "zod";

export const formSchema = z
    .object({
        firstName: z
            .string()
            .min(3, "First name minimum length is 3"),

        lastName: z
            .string()
            .min(3, "Last name is minimum length is 3"),

        dob: z
            .string()
            .min(1, "Date of birth is required"),

        email: z
            .email("Invalid email"),

        passWord: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(
                /[A-Z]/,
                "Password must contain at least one uppercase letter"
            )

            .regex(
                /[0-9]/,
                "Password must contain at least one number"
            )

            .regex(
                /[^A-Za-z0-9]/,
                "Password must contain at least one special character"
            ),



        cPassword: z
            .string(),
    }).refine(
        (data) => data.passWord === data.cPassword,
        {
            message: "Passwords do not match",
            path: ["cPassword"],
        }
    );;