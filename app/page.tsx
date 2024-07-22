"use client"
import Galerie from "@/components/ui/Galerie";
import Header from "@/components/ui/Header";
import {useEffect} from "react";
import {useProductStore} from "@/app/store";
import Collection from "@/components/ui/Collection";
import {SignOut} from "@/components/ui/SignOut";

export default function Home() {
    const setProducts = useProductStore.use.setProducts();
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
  <main className="flex-grow">
   <Header />
      <Collection />
    <Galerie />
  </main>
  );
}
