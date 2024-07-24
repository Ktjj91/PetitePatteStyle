import {prisma} from "@/db/db";
import {join} from 'path'
import {NextResponse} from "next/server";
import {writeFile} from "node:fs/promises";


export async function PUT(request: Request) {

    try {
        const formData = await request.formData();
        const id = Number(formData.get('id'));
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const price = formData.get('price') as string;
        const quantity = Number(formData.get('quantity'));
        const image: File | null = formData.get('image') as unknown as File;
        const categorie = Number(formData.get('categorie'));

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const imagePath = `/items/${image.name}`;
        const fullPath = join(process.cwd(), "public", imagePath);

        await writeFile(fullPath, buffer)

        const updateProduct = await prisma.products.update({
            where: {id: id},
            data: {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                image: imagePath,
                categoriesId: categorie
            }
        })
        return NextResponse.json({message: "Success !"}, {status: 200})


    } catch (e) {
        console.log(e)
        return NextResponse.json({error: e}, {status: 500})
    }
}
