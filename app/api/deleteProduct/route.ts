import {prisma} from "@/db/db";
import {NextResponse} from 'next/server'
import * as fs from "node:fs/promises";
import {join} from "path";
import {auth} from "@/auth";

/**
 * @swagger
 * /api/deleteProduct:
 *   delete:
 *     summary: Delete a product by ID
 *     description: This endpoint allows an admin to delete a product by providing the product ID. The associated image file will also be removed from the server.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the product to be deleted
 *                 example: 1
 *     responses:
 *       200:
 *         description: Product successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Delete success!"
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
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product not found"
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
/**
 * Gestionnaire pour la méthode HTTP DELETE.
 * Supprime un produit de la base de données et son image associée du système de fichiers.
 * Cette action est réservée aux utilisateurs ayant le rôle d'administrateur.
 *
 * @async
 * @function DELETE
 * @param {NextRequest} request - L'objet représentant la requête HTTP entrante.
 * @returns {Promise<NextResponse>} L'objet réponse contenant un message de succès ou d'erreur.
 */
export const DELETE = auth(async function DELETE(request) {
    if (request.auth?.user?.role !== "ADMIN") return NextResponse.json({message: "Not authenticated"}, {status: 401})
    try {
        const formData = await request.formData();
        const id = Number(formData.get('id'));
        const product = await prisma.products.findUnique({
            where: {id: id}
        })
        const fullPath = join(process.cwd(),"public",product?.image as string);
        await fs.unlink(fullPath);
        await prisma.products.delete({
            where: {id: id}
        })

        return NextResponse.json({message: "Delete success !"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500});
    }

})