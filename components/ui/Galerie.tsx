import React from 'react'
import {useProductStore} from "@/app/store";
import Link from "next/link";
import Image from "next/image";

export default function Galerie() {
    const products = useProductStore.use.products();
    return (
        <section id="galerie" className="max-w-[1000px] w-full mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {products.map( product => (
                    <Link key={product.id} href={`/product/${product?.id}`}>
                        <div className=" bg-primary flex flex-col items-center justify-center border border-primary shadow-xl hover:translate-y-[10px] transition-all ">
                            <Image width={100} height={100} src="/items/collier-bleu.jpeg" alt={""} />
                            <p className="text-sm font-bold">{product?.name}</p>
                            <p className="font-bold">{product.price}€</p>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
)
}
