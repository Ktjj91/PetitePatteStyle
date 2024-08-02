import {prisma} from "@/db/db";
import {NextResponse} from "next/server";
import {UpdateUserSchema} from "@/schemas";
import {auth} from "@/auth";

export async function PUT(request: Request) {
    const session = await auth();
    if (!session?.user) return NextResponse.json({message: "Not authenticated"}, {status: 401});
    try {
        const formData = await request.formData();
        const formObject: Record<string, FormDataEntryValue> = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        const result = await UpdateUserSchema.safeParseAsync(formObject);
        if (!result.success) {
            return NextResponse.json({message: result.error.errors}, {status: 400});
        }
        const {userId, name} = result.data;


        if (isNaN(userId)) {
            return NextResponse.json({message: "Invalid userId"}, {status: 400});
        }

        if (Number(session.user?.id) !== userId) {
            return NextResponse.json({message: "Not authorized"}, {status: 403});
        }

        const updateUser = await prisma.user.update({
            where: {id: userId},
            data: {
                name
            }
        })
        return NextResponse.json({success: updateUser})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}