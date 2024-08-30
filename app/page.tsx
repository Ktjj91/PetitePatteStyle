"use client"
import Galerie from "@/components/ui/Galerie";
import Header from "@/components/ui/Header";
import {useEffect} from "react";
import {useProductStore} from "@/app/store";
import Collection from "@/components/ui/Collection";

/**
 * Détermine l'URL de l'API en fonction de l'environnement (production ou développement).
 * @constant {string}
 */
const dns = process.env.NODE_ENV === 'production' ? "/api/products" : 'http://localhost:3000/api/products';

/**
 * Composant de la page d'accueil.
 * Ce composant récupère les produits depuis une API lors de son montage et les stocke dans un état global.
 *
 * @returns {JSX.Element} La page d'accueil rendue avec un en-tête, une collection de produits et une galerie.
 */
export default function Home() {
    /**
     * Action pour mettre à jour l'état des produits dans le store global.
     * @function
     */
    const setProducts = useProductStore.use.setProducts();
    /**
     * Fonction asynchrone pour récupérer les données des produits depuis l'API.
     * En cas de succès, les produits sont stockés dans le store global.
     * En cas d'échec, une erreur est loguée dans la console.
     *
     * @async
     * @function fetchData
     * @returns {Promise<void>}
     */
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
    /**
     * Hook React qui s'exécute après le montage du composant.
     * Il déclenche la récupération des données des produits depuis l'API.
     *
     * @function useEffect
     */
    useEffect(() => {
        fetchData().then();

    }, []);
    /**
     * Rendu du composant Home.
     * Ce composant comprend un en-tête, une collection de produits et une galerie.
     *
     * @returns {JSX.Element} La structure principale de la page d'accueil.
     */

    return (
        <main className="flex-grow">
            <Header/>
            <Collection/>
            <Galerie/>
        </main>
    );
}
