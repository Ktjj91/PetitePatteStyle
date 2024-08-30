import {prisma} from "@/db/db";
import {join} from 'path'
import {NextResponse} from "next/server";
import {writeFile} from "node:fs/promises";
import {auth} from "@/auth";

/**
 * @swagger
 * /api/updateProduct:
 *   put:
 *     summary: Update an existing product
 *     description: This endpoint allows an admin to update the details of an existing product by providing the product ID and the updated details such as name, description, price, quantity, category, and image.
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
 *               id:
 *                 type: integer
 *                 description: The ID of the product to update
 *                 example: 1
 *               name:
 *                 type: string
 *                 description: The new name of the product
 *                 example: "Updated Product Name"
 *               description:
 *                 type: string
 *                 description: The new description of the product
 *                 example: "This is the updated product description."
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The new price of the product
 *                 example: 29.99
 *               quantity:
 *                 type: integer
 *                 description: The new quantity of the product available
 *                 example: 50
 *               categorie:
 *                 type: integer
 *                 description: The ID of the category to which the product belongs
 *                 example: 2
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The new image file for the product (optional)
 *     responses:
 *       200:
 *         description: Product successfully updated
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
 *                 error:
 *                   type: string
 *                   example: "An error occurred"
 */

/**
 * Handler pour la méthode HTTP PUT. Met à jour les informations d'un produit dans la base de données.
 *
 * @async
 * @function PUT
 * @param {Request} request - L'objet Request provenant de la requête HTTP.
 * @returns {Promise<Response>} La réponse HTTP, sous forme de JSON.
 */
export async function PUT(request:Request) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return NextResponse.json({message: "Not authenticated"}, {status: 401})

    try {
        // Récupère les données du formulaire envoyées dans la requête
        const formData = await request.formData();
        const id = Number(formData.get('id'));
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const price = formData.get('price') as string;
        const quantity = Number(formData.get('quantity'));
        const categorie = Number(formData.get('categorie'));
        // Gestion de l'image si elle est présente
        const imageFile = formData.get('image') ;
        let imagePath = null;

        if(imageFile){
            const image: File = imageFile as File;
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            imagePath = `/items/${image.name}`;
            const fullPath = join(process.cwd(), "public", imagePath);
            await writeFile(fullPath, buffer);

        }
        // Recherche du produit existant dans la base de données
        const product = await prisma.products.findUnique({
            where:{id:id}
        })
        // Mise à jour du produit dans la base de données
        const updateProduct = await prisma.products.update({
            where: {id: id},
            data: {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                image: imagePath || product?.image,
                categoriesId: categorie
            }
        })
        return NextResponse.json({message: "Success !"}, {status: 200})


    } catch (e) {
        console.log(e)
        return NextResponse.json({error: e}, {status: 500})
    }
}
