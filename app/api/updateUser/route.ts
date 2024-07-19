import {prisma} from "@/db/db";
import {NextResponse} from "next/server";

export async function POST(request:Request){
    try {
        const formData = await request.formData();
        const sessionToken = formData.get('sessionToken') as string;
        const name = formData.get("name")  as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const userSession = await prisma.session.findUnique({
            where: { sessionToken },
            include: { user: true }
        });
        const user = userSession?.user;

        // const updateUser = await prisma.user.update()

        return NextResponse.json({user},{status:200})

    }catch (e) {

    }


}