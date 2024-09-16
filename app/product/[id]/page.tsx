import PageProduct from "@/app/product/[id]/Product";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string };
};

const dns = (id:string) => {
    if(process.env.NODE_ENV === 'production'){
        return  `${process.env.DNS}/api/product/${id}`;
    }
    return  `http://localhost:3000/api/product/${id}`;
}


export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.id;
    const response = await fetch(dns(id));
    const {product} = await response.json();

    return {
        title: `${product.name} | Petitepattestyle`,
        description: product.description,
    };
}


export default  async function Page({params}: { params: { id: string } }) {
    const response = await fetch(dns(params.id));
    const {product} = await response.json();
    return (
       <>
           <PageProduct product={product} />
       </>
    )
}
