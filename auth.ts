import NextAuth,{ type DefaultSession }  from "next-auth"
import Google from "@auth/core/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import {prisma} from "@/db/db";
import Credentials from "next-auth/providers/credentials"
// @ts-ignore
import {genSaltSync, hashSync} from "bcryptjs";

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
        Google({
        profile(profile) {
            return {role: profile.role ?? "USER",email:profile.email}
        },
    }),
        Credentials({
            type: "credentials",
            credentials:{
                email:{},
                password:{},
            },
            authorize: async (credentials) => {
                const salt = genSaltSync(10);
                const hashPassword =  hashSync(credentials.password, salt);
                const user = await prisma.user.findUnique({
                    where:{email:credentials.email as string}
                })
                if(user){
                   return {...user,id:user.id.toString()}
                } else {
                    const newUser = await prisma.user.create({
                        data:{
                            email:credentials.email as string,
                            password:hashPassword,
                            role:"USER"
                        }
                    });
                   return  {...newUser,id:newUser.id.toString()}
                }
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
               }

        },
})

