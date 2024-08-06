"use server"
import bcrypt from "bcryptjs"
import {getUserByEmail} from "@/data/db";
import {prisma} from "@/db/db";
import {LoginSchema} from "@/schemas";
import * as z from "zod"
export const register = async (values:z.infer<typeof LoginSchema>) => {
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    const validatedFields = LoginSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invalid fields !"}
    }
    try {
        const {email,password}  = validatedFields.data;
        const hasPassword = await bcrypt.hash(password,10);
        const existingUser = await getUserByEmail(email);
        if(existingUser){
            return {error:"email already  exist !"}
        }
        const user = await prisma.user.create({
            data:{
                email:email,
                password:hasPassword,
            }
        })
        return user;
    } catch (error) {
        throw error;
    }
}