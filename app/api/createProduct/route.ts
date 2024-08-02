import {join} from "path";
import {writeFile} from "node:fs/promises";
import {prisma} from "@/db/db";
import {NextResponse} from "next/server";
import {auth} from "@/auth";

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
