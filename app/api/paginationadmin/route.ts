import {prisma} from "@/db/db";
import {NextRequest, NextResponse} from "next/server";
import {auth} from "@/auth";

export const GET =auth( async function GET(request: NextRequest) {
    if (request.auth?.user?.role !== "ADMIN") return NextResponse.json({message: "Not authenticated"}, {status: 401})

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


})