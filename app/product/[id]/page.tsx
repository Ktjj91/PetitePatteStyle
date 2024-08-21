import PageProduct from "@/app/product/[id]/Product";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string };
};

const API_URL = process.env.DNS || 'http://localhost:3000';


export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.id;

    const response = await fetch(`${API_URL}/api/product/${id}`);
    const {product} = await response.json();

    return {
        title: `${product.name} | Petitepattestyle`,
        description: product.description,
    };
}


export default  async function Page({params}: { params: { id: string } }) {
    const response = await fetch(`${process.env.DNS}/api/product/${params.id}`);
    const product = await response.json();
    return (
       <>
           <PageProduct id={params.id} items={product} />
       </>
    )
}
