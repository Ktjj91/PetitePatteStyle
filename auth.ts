import NextAuth, {type DefaultSession} from "next-auth"
import Google from "@auth/core/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {prisma} from "@/db/db";
import Facebook from "next-auth/providers/facebook"
import Credentials from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs"
import {getUserByEmail} from "@/data/db";
import {stripe} from "@/stripe"

declare module "next-auth" {
    interface Session {
        user: {
            role: string,
            stripeCustomerId:string
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
        stripeCustomerId:string

    }
}


export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/sign-in',
    },
    session: {
        strategy: "jwt"
    },
    events: {
        createUser: async (message) => {
            const userId = message.user.id;
            const email = message.user.email;
            const name = message.user?.name ;

            if (!userId || !email) {
                return;
            }
            const stripeCustomer = await stripe.customers.create({
                email,
                name: name ?? undefined
            });

            await prisma.user.update({
                where:
                    {
                        id: Number(userId)
                    },
                data: {
                    stripeCustomerId: stripeCustomer.id,

                },
            })
        }

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
                return {role: profile.role ?? "USER", email: profile.email,name:profile.name}
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
                session.user.role = token.role as string
                session.user.stripeCustomerId = token.stripeCustomerId
                session.user.id = token.id
            }
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.role = user?.role;
                token.stripeCustomerId = user.stripeCustomerId
            }
            return token;
        },
    },
})

