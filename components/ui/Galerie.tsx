import React from 'react'
import {useProductStore} from "@/app/store";
import Card from "@/components/Card";

export default function Galerie() {
    const products = useProductStore.use.products();
    return (
        <section id="galerie" className="max-w-[1000px] w-full mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {products.map( product => (
                   <Card key={product.id} product={product}/>
                ))}
            </div>
        </section>
)
}
