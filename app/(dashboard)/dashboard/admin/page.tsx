"use client"
import {useProductStore} from "@/app/store";
import {useEffect} from "react";
import Image from "next/image";
import { X } from 'lucide-react';
import {Button} from "@/components/ui/button";
import deleteProductAction from '@/app/action/deleteProductAction'

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

    // const handleDelete = async (id) => {
    //     try {
    //         // Mise à jour optimiste (supprimer de l'interface utilisateur) :
    //         setProducts(products.filter((product) => product.id !== id));
    //
    //         // Suppression côté serveur :
    //         await deleteProductAction(id);
    //
    //         // Gérer la suppression réussie (facultatif) :
    //         console.log("Produit supprimé avec succès");
    //     } catch (error) {
    //         // Annuler la mise à jour optimiste et afficher l'erreur :
    //         setProducts(products.concat(products.find((product) => product.id === id)));
    //         console.error("Échec de la suppression du produit :", error);
    //     }
    // };

    // <Button onClick={() => handleDelete(product.id)} variant="red">

    return (
        <section className="p-3">
            <h1 className="text-center text-4xl">Produits</h1>
            <table className="w-full mt-3 text-center">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Image</th>
                    <th>Quantité</th>
                    <th>Catégorie</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td className="text-sm max-w-[200px]">{product.description}</td>
                        <td>{product.price}€</td>
                        <td>
                            <Image width={50} height={50} src={product.image} alt={product.name} />
                        </td>
                        <td>{product.quantity}</td>
                        <td>{product.categoriesId}</td>
                        <td>
                            <form >
                                <Button formAction={() => deleteProductAction(product.id)} variant="red"><X/></Button>
                            </form>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}
