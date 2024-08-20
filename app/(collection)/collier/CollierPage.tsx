"use client";
import Card from "@/components/Card";
import {useEffect, useState} from "react";
import {ProductType} from "@/types/ProductType";


export default function CollierPage() {
    const [collierProduct, setCollierProduct] = useState<ProductType[]>([]);
     const fetchCollierProduct = async () => {
         const response = await fetch("api/collection/3");
         if(!response.ok){
             throw new Error('Failed to fetch data')
         }
         const {products} = await response.json();
         setCollierProduct(products);
     }
    useEffect(() => {
        fetchCollierProduct()
    }, []);
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3 p-5 ">
            {collierProduct.map(collier => (
                <Card key={collier.id} product={collier}/>
            ))}

        </section>
    )
}
