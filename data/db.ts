import {prisma} from "@/db/db";
import {auth} from "@/auth";
import {NextResponse} from "next/server";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where:{email}
        })
        return user;
    } catch {
        return null;
    }
}

