"use client";
import {useEffect, useState} from "react";
import {ProductType} from "@/types/ProductType";
import Card from "@/components/Card";

export default function TshirtPage() {
    const [tshirtProduct, setTshirtProduct] = useState<ProductType[]>([]);
    const fetchTshirtProduct = async () => {
        const response = await fetch("api/collection/2");
        if(!response.ok){
            throw  new Error("failed to fetch data ")
        }
        const {products} = await response.json();
        setTshirtProduct(products);
    }
    useEffect(() => {
        fetchTshirtProduct()
    },[])

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3 p-5 ">
            {tshirtProduct.map(tshirt => (
                <Card key={tshirt.id} product={tshirt} />
            ))}

        </section>

    )
}
