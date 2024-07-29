import {prisma} from "@/db/db";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const cursor = Number(searchParams.get('cursor'));
    const pageSize = Number(searchParams.get("pageSize")) || 10;
    try {
        const queryOptions: {
            take: number;
            cursor?: { id: number };
            skip?: number;
        } = {
            take: pageSize,
        };

        if (cursor) {
            queryOptions.cursor = {
                id: cursor,
            };
            queryOptions.skip = 1;
        }
        const products = await prisma.products.findMany(queryOptions);
        return NextResponse.json({products: products}, {status: 200})

    } catch (e:any) {
        return NextResponse.json({message: e.message || e.toString()}, {status: 500})
    }


}