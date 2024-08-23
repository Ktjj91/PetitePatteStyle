"use client";
import Card from "@/components/Card";
import {useEffect, useState} from "react";
import {ProductType} from "@/types/ProductType";


export default function CollierPage() {
    const [collierProduct, setCollierProduct] = useState<ProductType[]>([]);
     const fetchCollierProduct = async () => {
         try {
             const response = await fetch("api/collection/3");
             const {products} = await response.json();
             setCollierProduct(products);
         } catch (error) {
             console.error(error);
             throw error;
         }

     }
    useEffect(() => {
        fetchCollierProduct().then()
    }, []);
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3 p-5 ">
            {collierProduct.map(collier => (
                <Card key={collier.id} product={collier}/>
            ))}

        </section>
    )
}
