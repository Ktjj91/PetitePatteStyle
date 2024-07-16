import {prisma} from "@/db/db";
import { NextResponse } from 'next/server'

export async function GET(request: Request,{params}:{params:{id:string}}) {

    try {
        const id = Number(params.id);
        const products = await prisma.products.findMany({
            where:{categoriesId:id}
        })
        return NextResponse.json({products},{status:200})
    } catch (error) {
        console.error("La liste de produits contient une erreur",error)
        return NextResponse.redirect(new URL('/', request.url))
    }

}