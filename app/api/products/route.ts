import {prisma} from "@/db/db";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        const products = await prisma.products.findMany({
            take:6
        });
        return NextResponse.json({products},{status:200})
    } catch (error) {
        return NextResponse.json({message:error},{status:500});
    }
}