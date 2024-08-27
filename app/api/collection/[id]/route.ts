import {prisma} from "@/db/db";
import { NextResponse } from 'next/server'

/**
 * @swagger
 * /api/collection/{id}:
 *   get:
 *     summary: Retrieve an collection by ID
 *     tags: [Collection Single]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the item to retrieve
 *     responses:
 *       200:
 *         description: The requested item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Item not found
 */
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