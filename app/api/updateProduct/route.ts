import {prisma} from "@/db/db";
import {join} from 'path'
import {NextResponse} from "next/server";
import {writeFile} from "node:fs/promises";
import {auth} from "@/auth";


export async function PUT(request:Request) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return NextResponse.json({message: "Not authenticated"}, {status: 401})

    try {
        const formData = await request.formData();
        const id = Number(formData.get('id'));
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const price = formData.get('price') as string;
        const quantity = Number(formData.get('quantity'));
        const categorie = Number(formData.get('categorie'));

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
        const product = await prisma.products.findUnique({
            where:{id:id}
        })
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
