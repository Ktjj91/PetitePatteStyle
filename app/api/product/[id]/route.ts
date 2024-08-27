import {NextResponse} from "next/server";
import {prisma} from "@/db/db";


/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Retrieve an item by ID
 *     tags: [Product Single]
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
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 quantity:
 *                   type: number
 *                 image:
 *                   type: string
 *                 size:
 *                   type: string
 *                 is_available:
 *                   type: boolean
 *                 categoriesId:
 *                   type: number
 *       404:
 *         description: Item not found
 */
export async function GET(
    request: Request,
    {params}: { params: { id: string } }
) {
    try {
        const id = Number(params.id);
        const product = await prisma.products.findUnique({
            where: {id: id}
        })
        return NextResponse.json({product},{status:200})

    } catch (e) {
        console.error("Product not found !")
        return NextResponse.redirect(new URL('/', request.url))
    }
}