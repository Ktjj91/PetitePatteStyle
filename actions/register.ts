"use server"
import bcrypt from "bcryptjs"
import {getUserByEmail} from "@/data/db";
import {prisma} from "@/db/db";
import {RegisterSchema} from "@/schemas";
import * as z from "zod"
import {stripe} from "@/stripe";
export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invalid fields !"}
    }
    try {
        const {email,password,name}  = validatedFields.data;
        const hasPassword = await bcrypt.hash(password,10);
        const existingUser = await getUserByEmail(email);
        if(existingUser){
            return {error:"email already  exist !"}
        }
        const user = await prisma.user.create({
            data:{
                 name:name,
                email:email,
                password:hasPassword,
            }
        })
        const stripeCustomer = await stripe.customers.create({
            email,
            name
        });
         await prisma.user.update({
             where:{
                 id:user.id
             },
             data:{
                 stripeCustomerId:stripeCustomer.id
             }
         })
        return user;
    } catch (error) {
        throw error;
    }
}