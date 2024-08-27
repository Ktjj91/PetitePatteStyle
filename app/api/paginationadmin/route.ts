// @ts-nocheck

import {prisma} from "@/db/db";
import {NextRequest, NextResponse} from "next/server";
import {auth} from "@/auth";

/**
 * @swagger
 * /api/paginationadmin:
 *   get:
 *     summary: Retrieve a list of products with pagination
 *     description: This endpoint allows an admin to retrieve a paginated list of products. The pagination is handled using a cursor and page size.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: cursor
 *         schema:
 *           type: integer
 *           description: The ID of the last product from the previous page. Used to fetch the next set of products.
 *           example: 10
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           description: The number of products to return in one page. Defaults to 10 if not provided.
 *           example: 10
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Product Name"
 *                       description:
 *                         type: string
 *                         example: "This is a product description."
 *                       image:
 *                         type: string
 *                         example: "/items/product-image.jpg"
 *                       quantity:
 *                         type: integer
 *                         example: 50
 *                       price:
 *                         type: number
 *                         format: float
 *                         example: 19.99
 *                       categoriesId:
 *                         type: integer
 *                         example: 1
 *       401:
 *         description: Not authenticated or unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Not authenticated"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred"
 */

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
