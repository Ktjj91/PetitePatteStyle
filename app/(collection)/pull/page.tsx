"use client";
import React, {useEffect, useState} from "react";
import {ProductType} from "@/types/ProductType";
import Card from "@/components/ui/Card";
import Image from "next/image";

export default function PullPage() {
    const [pullProduct, setPullProduct] = useState<ProductType[]>([]);
    useEffect(() => {
        fetchPullProduct();
    }, []);
    const fetchPullProduct = async () => {
        const response = await fetch("api/collection/1");
        if(!response.ok){
            throw new Error('Failed to fetch data')
        }
        const {products} =  await response.json();
        setPullProduct(products)
    }
    return (
       <section className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3 p-5 ">
           {pullProduct.map(pull => (
               <Card key={pull.id} product={pull} />
           ))}

       </section>
    )
}
