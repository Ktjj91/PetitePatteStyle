import {join} from "path";
import {writeFile} from "node:fs/promises";
import {prisma} from "@/db/db";
import {NextResponse} from "next/server";
import {auth} from "@/auth";

/**
 * @swagger
 * /api/createProduct:
 *   post:
 *     summary: Create a new product
 *     description: This endpoint allows an admin to create a new product by providing necessary details like name, description, quantity, price, image, and category.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *                 example: "Product Name"
 *               description:
 *                 type: string
 *                 description: The description of the product
 *                 example: "This is a detailed description of the product."
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product available
 *                 example: 10
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the product
 *                 example: 19.99
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file for the product
 *               categorie:
 *                 type: integer
 *                 description: The ID of the category the product belongs to
 *                 example: 1
 *     responses:
 *       200:
 *         description: Product successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Success!"
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

/**
 * Gestionnaire pour la méthode HTTP POST.
 * Permet de créer un nouveau produit dans la base de données et d'enregistrer l'image associée sur le système de fichiers.
 * Cette action est réservée aux utilisateurs ayant le rôle d'administrateur.
 *
 * @async
 * @function POST
 * @param {NextRequest} request - L'objet représentant la requête HTTP entrante.
 * @returns {Promise<NextResponse>} L'objet réponse contenant un message de succès ou d'erreur.
 */
export const POST = auth( async function POST(request) {
    if (request.auth?.user?.role !== "ADMIN") return NextResponse.json({message: "Not authenticated"}, {status: 401})
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const quantity = Number(formData.get('quantity'));
        const price = Number(formData.get('price'));
        const image: File | null = formData.get('image') as unknown as File;
        const categorie = Number(formData.get("categorie"));

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const imagePath = `/items/${image.name}`;
        const fullPath = join(process.cwd(), "public", imagePath);

        await writeFile(fullPath, buffer)
        await prisma.products.create({
            data: {
                name: name,
                description: description,
                image: imagePath,
                quantity: quantity,
                price: price,
                categoriesId: categorie,
                size: ""
            }
        })
        return NextResponse.json({message: "Success !"}, {status: 200})

    } catch (e) {
        console.log(e)
        return NextResponse.json({message: e}, {status: 500})
    }
})
