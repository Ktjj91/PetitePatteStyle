"use client"
import Galerie from "@/components/ui/Galerie";
import Header from "@/components/ui/Header";
import {useEffect} from "react";
import {useProductStore} from "@/app/store";
import Collection from "@/components/ui/Collection";

const dns = process.env.NODE_ENV === 'production' ? "/api/products" : 'http://localhost:3000/api/products';

export default function Home() {
    const setProducts = useProductStore.use.setProducts();
    const fetchData = async () => {
        try {
            const response = await fetch(dns);
            const {products} = await response.json();
            setProducts(products);

        } catch (error) {
            console.error(error);
            throw error;
        }

    }
    useEffect(() => {
        fetchData().then();
    }, []);


    return (
        <main className="flex-grow">
            <Header/>
            <Collection/>
            <Galerie/>
        </main>
    );
}
