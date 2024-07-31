import NextAuth,{ type DefaultSession }  from "next-auth"
import Google from "@auth/core/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import {prisma} from "@/db/db";
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import {LoginSchema} from "@/schemas";
import {getUserByEmail} from "@/data/db";
import Facebook from "next-auth/providers/facebook"

declare module "next-auth" {
    interface Session {
        user: {
            role: string
        } & DefaultSession["user"]
    }
    interface User {
        role?:string
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Facebook({
           profile(profile){
                if(profile){
                    delete profile.image;
                    delete profile.picture
                    profile.role = "USER"
                }
                return profile
            }
        }),
        Google({
        profile(profile) {
            return {role: profile.role ?? "USER",email:profile.email}
        },
    }),
        Credentials({
            type:"credentials",
            credentials:{
                email:{},
                password:{}
            },
            authorize: async (credentials) => {
                const validatedFields = LoginSchema.safeParse(credentials);
                if(validatedFields.success){
                    const {email, password} = validatedFields.data;
                    const user = await getUserByEmail(email);
                    if (!user || !user?.password) return null;
                    const passwordsMath = await bcrypt.compare(password, user.password);
                    if(passwordsMath) return {
                        id: user.id.toString(),
                            name: user.name,
                            email: user.email,
                            role: user.role,
                    };;
                }
                return null;
            }
        })
    ],
    callbacks:{
        async session({session,user,token}) {
                   return {
                       ...session,
                       user:{
                           ...session.user,
                           role:user.role,
                       }
                   }
               },

        },
})

