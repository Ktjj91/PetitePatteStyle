import NextAuth, {type DefaultSession} from "next-auth"
import Google from "@auth/core/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {prisma} from "@/db/db";
import Facebook from "next-auth/providers/facebook"


declare module "next-auth" {
    interface Session {
        user: {
            role: string
        } & DefaultSession["user"]
    }

    interface User {
        role?: string
    }
}

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Facebook({
            profile(profile) {
                if (profile) {
                    delete profile.image;
                    delete profile.picture
                    profile.role = "USER"
                }
                return profile
            }
        }),
        Google({
            profile(profile) {
                return {role: profile.role ?? "USER", email: profile.email}
            },
        }),
    ],
    callbacks: {
        async session({session, user, token}) {
            return {
                ...session,
                user: {
                    ...session.user,
                    role: user.role,
                }
            }
        },

    },
})

