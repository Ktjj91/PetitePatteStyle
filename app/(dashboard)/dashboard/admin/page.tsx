"use client"
import {useProductStore} from "@/app/store";
import {useEffect} from "react";
import Image from "next/image";
import { X,Pencil} from 'lucide-react';
import {Button} from "@/components/ui/button";
import deleteProductAction from '@/app/action/deleteProductAction'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

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

    const handleDelete = async (id:number) => {
        try {
            setProducts(products.filter((product) => product.id !== id));
            await deleteProductAction(id);

        } catch (error) {
            console.error("Échec de la suppression du produit :", error);
        }
    };


    return (
        <section className="p-3 flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl">Produits</h1>
            <table className="  mt-3  max-w-[1000px] w-full table-auto  text-center border border-gray-200  border-collapse border-spacing-1.5">
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
                <tbody >
                {products.map((product) => (
                    <tr key={product.id} className="border border-gray-200">
                        <td>{product.name}</td>
                        <td className="text-sm max-w-[200px]">{product.description}</td>
                        <td>{product.price}€</td>
                        <td>
                            <Image width={50} height={50} src={product.image} alt={product.name} />
                        </td>
                        <td>{product.quantity}</td>
                        <td>{product.categoriesId}</td>
                        <td>
                            <div className="flex items-center justify-center gap-2">
                                <Dialog>
                                    <DialogTrigger>
                                        <Button variant="orange"><Pencil/></Button>
                                    </DialogTrigger>
                                    <DialogContent >
                                        <DialogHeader>
                                            <DialogTitle>Modifier le produit</DialogTitle>
                                        </DialogHeader>
                                        <form action="">
                                            <Label htmlFor="name">Nom</Label>
                                            <Input name="name" id="name" type="text" />
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea id="description" name="description" />
                                            <Label htmlFor="price">Prix</Label>
                                            <Input type="number" name="price" id="price" />
                                            <Label htmlFor="quantity">Prix</Label>
                                            <Input type="number" name="quantity" id="quantity" />
                                            <Label htmlFor="image">Image</Label>
                                            <Input id="image" name="image" type="file" />
                                            <Label htmlFor='categorie' className="text-sm">Categorie</Label>
                                            <Select name="categorie" >
                                                <SelectTrigger  id="categorie"  className="mt-3 mb-3 w-full">
                                                    <SelectValue placeholder="Choisisez une catéforie"></SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">Pull</SelectItem>
                                                    <SelectItem value="2">T-shirt</SelectItem>
                                                    <SelectItem value="3">Harnais</SelectItem>
                                                    <SelectItem value="4">Collier</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <div className=" mt-3 w-full flex justify-center">
                                                <Button type="submit" variant="orange">Modifier</Button>
                                            </div>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                                <form className="flex items-center justify-center flex-col">
                                    <Button onClick={() => handleDelete(product.id)} variant="red"><X/></Button>
                                </form>
                            </div>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}
