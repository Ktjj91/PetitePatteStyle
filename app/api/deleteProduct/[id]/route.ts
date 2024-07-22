import {prisma} from "@/db/db";
import { NextResponse } from 'next/server'

export async function DELETE(request: Request,{params}:{params:{id:string}}) {
    try {
        const id = Number(params.id);
         await prisma.products.delete({
            where:{id:id}
        })
        return NextResponse.json({status:200});
    } catch (error) {
        console.error("La supression a échouer",error)
        return NextResponse.redirect(new URL('/', request.url))
    }

}