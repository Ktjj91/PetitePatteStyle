"use client"
import {useProductStore} from "@/app/store";
import {useEffect, useState} from "react";
import Image from "next/image";
import { X,Pencil} from 'lucide-react';
import {Button} from "@/components/ui/button";
import deleteProductAction from '@/app/action/deleteProductAction'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
    DialogClose
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
interface Categories {
    [key: number]: string;
}
export default function AdminPage() {
    const setProducts = useProductStore.use.setProducts();
    const products = useProductStore.use.products();
    const categories:Categories = {
        1:"Pull",
        2:"T-shirt",
        3:"Collier",
        4:"Harnais"
    }
    const [formData, setFormData] = useState({
        id: "",
        name: '',
        description: '',
        price: '',
        quantity: '',
        image:null as File | null,
        categorie: '',
    });

    const handleChange = (e:any) => {
        const { name, value, files } = e.target;
        console.log(files)
        if (name === 'image') {
            setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData();
        data.append('id', formData.id);
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('quantity', formData.quantity);
        data.append('categorie', formData.categorie);
        if (formData.image) {
            data.append('image', formData.image);
        }
        const response = await fetch("/api/updateProduct", {
            method: 'PUT',
            body: data,
        });

        if (response.ok) {
            console.log('Form submitted successfully');
            fetchData();
        } else {
            console.error('Form submission failed');
        }
    };

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
    const handleEdit = (product:any) => {
        setFormData({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: null,
            categorie: product.categoriesId,
        });
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
                            {product.image && <Image width={50} height={50} src={product.image} alt={product.name} />
                            }
                        </td>
                        <td>{product.quantity}</td>
                        <td>{product.categoriesId}</td>
                        <td>
                            <div className="flex items-center justify-center gap-2">
                                <Dialog>
                                    <DialogTrigger>
                                        <Button variant='orange' onClick={() => handleEdit(product)}><Pencil /></Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Modifier le produit</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form onSubmit={handleSubmit} >
                                            <Input type="hidden" value={formData.id} name="id" onChange={handleChange} />
                                            <Label htmlFor="name">Nom</Label>
                                            <Input value={formData.name} name="name" id="name" type="text"  onChange={handleChange} />
                                            <Label htmlFor="desc">Description</Label>
                                            <Textarea value={formData.description} id="description" name="description"  onChange={handleChange} />
                                            <Label htmlFor="price">Prix</Label>
                                            <Input value={formData.price} type="number" name="price" id="price"  onChange={handleChange} />
                                            <Label htmlFor="quantity">Quantité</Label>
                                            <Input value={formData.quantity} type="number" name="quantity" id="quantity"  onChange={handleChange} />
                                            <Label htmlFor="image">Image</Label>
                                            <Input  onChange={handleChange}  id="image" name="image" type="file" />
                                            <Label  htmlFor='categorie' className="text-sm">Categorie</Label>
                                            <Select name="categorie" >
                                                <SelectTrigger  id="categorie"  className="mt-3 mb-3 w-full">
                                                    <SelectValue placeholder={categories[product.categoriesId]}></SelectValue>
                                                </SelectTrigger>
                                                <SelectContent  onChange={handleChange}>
                                                    <SelectItem value="1">Pull</SelectItem>
                                                    <SelectItem value="2">T-shirt</SelectItem>
                                                    <SelectItem value="3">Collier</SelectItem>
                                                    <SelectItem value="4">Harnais</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <div className=" mt-3 w-full flex justify-center">
                                                <DialogClose>
                                                    <Button type="submit" variant="orange">Modifier</Button>
                                                </DialogClose>
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
