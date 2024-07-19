"use client"
import {useEffect, useState} from "react";
import {useProductStore} from "@/app/store";
import Image from "next/image";
import chien from "@/public/Image.png";
import {Minus, Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";


export default function Page({ params }: { params: { id: string } }) {
    const {id} = params;
    const setProduct = useProductStore.use.setProduct();
    const product = useProductStore.use.product();
    const fetchDataProduct = async () => {
        const response = await fetch(`/api/product/${id}`);
        if(!response.ok){
            throw new Error('Product not found');
        }
        const {product} = await  response.json();
        setProduct(product);
    }
    useEffect(() => {
        fetchDataProduct();
    }, []);


    return (
        <div className="container grid my-5 place-content-center place-items-center lg:grid-cols-2 max-w-7xl  sm:grid-cols-1 md:grid-cols-1">
            <div className="flex justify-center items-center">
                <Image width={400} height={400} src={product.image} alt="chien" />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h2 className=" text-4xl font-bold self-center mt-3">{product.name}</h2>
                <div className="mt-5 w-full">
                    <span className="font-bold ">{product.price}€</span>
                </div>
                <div className="mt-3">
                    <Label htmlFor='taille' className="text-sm">Taille : </Label>
                    <Select  >
                        <SelectTrigger  className="mt-3 mb-3 w-[180px]">
                            <SelectValue placeholder="Choissiez une Taille"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="s">S</SelectItem>
                            <SelectItem value="m">M</SelectItem>
                            <SelectItem value="l">L</SelectItem>
                            <SelectItem value="xl">XL</SelectItem>
                        </SelectContent>
                    </Select>
                    <Label htmlFor="quantite" >Quantité : </Label>
                    <Input id="quantite" name="quantite"className="mt-3" type="number" />
                </div>
                <div className="mt-3">
                    <p>{product.description}</p>
                </div>
                <Button className="w-full mt-5" variant="defaultBlack">Ajouter au panier </Button>
            </div>
        </div>
    )
}