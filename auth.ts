import NextAuth,{ type DefaultSession }  from "next-auth"
import Google from "@auth/core/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = PrismaClient;


declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            role: "ROLE" | "USER" | unknown
            /**
             * By default, TypeScript merges new interface properties and overwrites existing ones.
             * In this case, the default session user properties will be overwritten,
             * with the new ones defined above. To keep the default session user properties,
             * you need to add them back into the newly declared interface.
             */
        } & DefaultSession["user"]
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google({
        profile(profile) :any{
            return {role: profile.role ?? "USER"}
        }
    })],
    callbacks: {
        session({ session   , token }) {
            session.user.role = token.role
            return session
        },
    }
})

