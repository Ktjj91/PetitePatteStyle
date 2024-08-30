"use client"
import { useState} from "react";
import {useCartProduct} from "@/app/store";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {ProductTypeId} from "@/types/ProductType";

/**
 * Composant pour afficher la page d'un produit et permettre à l'utilisateur de l'ajouter au panier.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {ProductTypeId} props.product - Le produit à afficher et à ajouter au panier.
 *
 * @returns {JSX.Element} La structure de la page produit.
 */
export default function PageProduct({product} :{product: ProductTypeId}) {
    /** @type {Function} setProductCart - Fonction pour mettre à jour les produits dans le panier. */
    const setProductCart = useCartProduct.use.setProducts();
    /** @type {Array} productsCart - Liste des produits actuellement dans le panier. */
    const productsCart = useCartProduct.use.products();
    /** @type {Function} addToCart - Fonction pour ajouter un produit au panier. */
    const addToCart = useCartProduct.use.addToCart();
    /** @type {[string, Function]} size - État pour gérer la taille sélectionnée par l'utilisateur. */
    const [size, setSize] = useState<string>("S");
    /** @type {[string, Function]} quantity - État pour gérer la quantité sélectionnée par l'utilisateur. */
    const [quantity, setQuantity] = useState<string>("1");
    /**
     * Fonction pour ajouter le produit sélectionné au panier.
     * Si le produit avec la même taille existe déjà dans le panier, la quantité est mise à jour.
     * Sinon, le produit est ajouté au panier.
     */
    const onAddCart = () => {
        const newProduct = {...product,size:size,quantity:Number(quantity)};
        const existingProductIndex = productsCart.findIndex((p) => p.id === newProduct.id && p.size === size);
        if (existingProductIndex > -1) {
            const updatedProducts = [...productsCart];
            updatedProducts[existingProductIndex] = {
                ...updatedProducts[existingProductIndex],
                quantity: updatedProducts[existingProductIndex].quantity + newProduct.quantity
            };
            setProductCart(updatedProducts);
        } else {
            // @ts-ignore
            setProductCart([...productsCart, newProduct]);
        }

    }
    /**
     * Rendu du composant PageProduct.
     * Affiche les détails du produit, permet la sélection de la taille et de la quantité,
     * et offre la possibilité d'ajouter le produit au panier.
     *
     * @returns {JSX.Element} La structure de la page produit avec ses composants.
     */
    return (
        <div
            className="container grid my-5 place-content-center place-items-center lg:grid-cols-2 max-w-7xl  sm:grid-cols-1 md:grid-cols-1">
            {product  ? (
                <>
                    <div className="flex justify-center items-center">
                        <Image width={400} height={400} src={product.image} alt={product.name}/>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <h2 className=" text-4xl font-bold self-center mt-3">{product.name}</h2>
                        <div className="mt-5 w-full">
                            <span className="font-bold ">{product.price}€</span>
                        </div>
                        <div className="mt-3">
                            <Label htmlFor='size' className="text-sm">Taille : </Label>
                            <Select name="size" onValueChange={e => setSize(e)}>
                                <SelectTrigger id="size" className="mt-3 mb-3 w-[180px]">
                                    <SelectValue placeholder="Choissiez une Taille"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="S">S</SelectItem>
                                    <SelectItem value="M">M</SelectItem>
                                    <SelectItem value="L">L</SelectItem>
                                    <SelectItem value="XL">XL</SelectItem>
                                </SelectContent>
                            </Select>
                            <Label htmlFor="quantite">Quantité : </Label>
                            <Input value={quantity} onChange={(e) => setQuantity(e.target.value)} id="quantite"
                                   name="quantite" className="mt-3" type="number"/>
                        </div>
                        <div className="mt-3">
                            <p>{product.description}</p>
                        </div>
                        <Button onClick={onAddCart} className="w-full mt-5" variant="defaultBlack">Ajouter au
                            panier </Button>
                    </div>
                </>

            ) :
                <p>Chargement en cours ...</p>
            }
        </div>
    )
}
