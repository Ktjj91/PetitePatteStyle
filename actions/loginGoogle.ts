"use server"

import {signIn} from "@/auth";
import {AuthError} from "next-auth";

export const loginGoogle = async (formData:any) => {
    try {
        await signIn('google',{
            redirectTo:"/dashboard/settings",
            formData:formData
        })

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "InvalidCredential"}
                default:
                    return {error: "Something went wrong"}
            }
        }
        throw error;
    }
}