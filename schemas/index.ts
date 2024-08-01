import * as  z from "zod";

export const UpdateUserSchema = z.object({
    name:z.string().min(1,),
    userId:z.coerce.number()
})