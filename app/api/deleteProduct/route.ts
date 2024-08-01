import {prisma} from "@/db/db";
import {NextResponse} from 'next/server'
import * as fs from "node:fs/promises";
import {join} from "path";
import {auth} from "@/auth";
export const DELETE = auth(async function DELETE(request) {
    if (request.auth?.user?.role !== "ADMIN") return NextResponse.json({message: "Not authenticated"}, {status: 401})
    try {
        const formData = await request.formData();
        const id = Number(formData.get('id'));
        const product = await prisma.products.findUnique({
            where: {id: id}
        })
        const fullPath = join(process.cwd(),"public",product?.image as string);
        await fs.unlink(fullPath);
        await prisma.products.delete({
            where: {id: id}
        })

        return NextResponse.json({message: "Delete success !"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500});
    }

})