import {NextResponse} from "next/server";
import {prisma} from "@/db/db";

export async function GET(
    request: Request,
    {params}: { params: { id: string } }
) {
    try {
        const id = Number(params.id);
        const product = await prisma.products.findUnique({
            where: {id: id}
        })
        return NextResponse.json({product},{status:200})

    } catch (e) {
        console.error("Product not found !")
        return NextResponse.redirect(new URL('/', request.url))
    }
}