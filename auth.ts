import NextAuth, {type DefaultSession} from "next-auth"
import Google from "@auth/core/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {prisma} from "@/db/db";
import Facebook from "next-auth/providers/facebook"
import Credentials from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs"
import {getUserByEmail} from "@/data/db";


declare module "next-auth" {
    interface Session {
        user: {
            role: string,
        } & DefaultSession["user"]
    }

    interface User {
        role?: string
    }


}

import {JWT} from "next-auth/jwt"

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        role?: string
    }
}


export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    pages:{
        signIn: '/sign-in',
    },
    session: {
        strategy: "jwt"
    },
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
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                if (!credentials) {
                    throw new Error('No credentials provided');
                }
                const {email, password} = credentials;
                const passwordHash = await bcryptjs.hash(password as string, 10);
                const user = await getUserByEmail(email as string);
                if (user) {
                    const isValid = await bcryptjs.compare(password as string, user.password as string);
                    if (isValid) {
                        return {...user, id: user.id.toString()};
                    } else {
                        throw new Error('Invalid credentials');
                    }
                } else {
                    throw new Error('No user found');
                }
            }
        })

    ],
    callbacks: {
        async session({session, user, token}) {
            if (token) {
                session.user.role = token.role as string;
            }
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.role = user?.role;
            }
            return token;
        },
    },
})

