"use client";
import Card from "@/components/Card";
import {useEffect, useState} from "react";
import {ProductType} from "@/types/ProductType";

export default function HarnaisPage() {
    const [harnaisProduct, setHarnaisProduct] = useState<ProductType[]>([]);
    const fetchHarnaisProduct = async () => {
        const response = await fetch("api/collection/4");
        if(!response.ok){
            throw new Error('Failed to fetch data')
        }
        const {products} = await response.json();
        setHarnaisProduct(products);
    }

    useEffect(() => {
        fetchHarnaisProduct()
    }, []);
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3 p-5 ">
            {harnaisProduct.map(harnais => (
                <Card key={harnais.id} product={harnais}/>
            ))}
        </section>
    )
}
