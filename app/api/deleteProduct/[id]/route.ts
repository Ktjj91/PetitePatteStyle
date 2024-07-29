import {prisma} from "@/db/db";
import {NextResponse} from 'next/server'
import * as fs from "node:fs/promises";
import {join} from "path";

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    try {
        const id = Number(params.id);
        const product = await prisma.products.findUnique({
            where: {id: id}
        })
        const fullpath = join(process.cwd(),"public",product?.image as string);
        await fs.unlink(fullpath);
        await prisma.products.delete({
            where: {id: id}
        })

        return NextResponse.json({message: "Delete success !"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500});
    }

}