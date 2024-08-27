import {prisma} from "@/db/db";
import { NextResponse } from 'next/server'
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve 6 product
 *     description: Return 6 products in the database
 *     responses:
 *       200:
 *         description: Success !
 */
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