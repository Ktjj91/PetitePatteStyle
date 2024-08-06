import * as  z from "zod";

export const UpdateUserSchema = z.object({
    name:z.string().min(1,),
    userId:z.coerce.number()
})

export const LoginSchema =  z.object({
    email:z.string().email({
        message:"email is required"
    }),
    password:z.string().min(1,{
        message:"password is required"
    })
})

