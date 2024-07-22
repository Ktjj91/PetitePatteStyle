"use client"
import {useProductStore} from "@/app/store";
import {useEffect} from "react";
import Image from "next/image";


export default function AdminPage() {
    const setProducts = useProductStore.use.setProducts();
    const products = useProductStore.use.products();
    const fetchData = async () => {
        const response = await fetch("/api/products");
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const {products} = await response.json();
        setProducts(products)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="p-3">
            <h1 className="text-center text-4xl">Produits</h1>
            <table className="w-full mt-3">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Image</th>
                    <th>Quantité</th>
                    <th>Taille</th>
                    <th>Catégorie</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </section>
    )
}
