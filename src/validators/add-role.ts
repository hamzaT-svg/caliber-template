import { z } from "zod";

export const roleFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
});

// generate form types from zod validation schema
export type AddRoleInput = z.infer<typeof roleFormSchema>;
