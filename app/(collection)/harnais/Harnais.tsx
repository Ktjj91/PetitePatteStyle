"use client";
import Card from "@/components/Card";
import {useEffect, useState} from "react";
import {ProductType} from "@/types/ProductType";

export default function HarnaisPage() {
    const [harnaisProduct, setHarnaisProduct] = useState<ProductType[]>([]);
    const fetchHarnaisProduct = async () => {
        try {
            const response = await fetch("api/collection/4");
            const {products} = await response.json();
            setHarnaisProduct(products);

        } catch (error){
            console.error(error);
            throw error;
        }

    }

    useEffect(() => {
        fetchHarnaisProduct().then()
    }, []);
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3 p-5 ">
            {harnaisProduct.map(harnais => (
                <Card key={harnais.id} product={harnais}/>
            ))}
        </section>
    )
}
