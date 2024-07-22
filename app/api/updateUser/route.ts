import {prisma} from "@/db/db";
import {NextResponse} from "next/server";
// @ts-ignore
import {genSaltSync, hashSync} from "bcryptjs";


export async function PUT(request: Request) {
    try {
        const formData = await request.formData();
        const sessionToken = formData.get('sessionToken') as string;
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const userSession = await prisma.session.findUnique({
            where: {sessionToken},
            include: {user: true}
        });
        const user = userSession?.user;

        const salt = genSaltSync(10);
        const hashPassword = hashSync(password, salt);

        const updateUser = await prisma.user.update({
            where: {id: user?.id},
            data: {
                name: name,
                password: hashPassword
            }
        })
        return NextResponse.json( {status: 204})
    } catch (e) {

    }
}