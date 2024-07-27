import {prisma} from "@/db/db";
import { NextResponse } from 'next/server'

export async function DELETE(request: Request,{params}:{params:{id:string}}) {
    try {
        const id = Number(params.id);
         await prisma.products.delete({
            where:{id:id}
        })
        return NextResponse.json({message:"Delete success !"},{status:200});
    } catch (error) {
        return NextResponse.json({message:error},{status:500});
    }

}