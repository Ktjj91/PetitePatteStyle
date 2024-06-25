import Image from "next/image";
import chien from "@/public/Image.png"
import {Separator} from "@/components/ui/separator";
import { Plus,Minus } from 'lucide-react';
import {Button} from "@/components/ui/button";

export default function ProductDetails() {
    return (
        <div className="container grid my-5 place-content-center place-items-center lg:grid-cols-2 max-w-7xl  sm:grid-cols-1 md:grid-cols-1">
            <div className="flex justify-center items-center">
                <Image width="400" src={chien} alt="chien" />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h2 className=" text-4xl font-bold self-center mt-3">Product Name</h2>
                <div className="mt-5 w-full">
                    <span className="font-bold ">28,95 EUR</span>
                </div>
                <div className="mt-3">
                    <span className="text-sm">Taille : </span>
                    <ul className="flex gap-2 my-3">
                        <li className="cursor-pointer border min-w-[32px]  text-center ">S</li>
                        <li className="cursor-pointer border min-w-[32px]  text-center ">M</li>
                        <li className="cursor-pointer border min-w-[32px]  text-center ">L</li>
                        <li className="cursor-pointer border min-w-[32px]  text-center">XL</li>
                    </ul>
                    <span className="text-sm ">Quantité:</span>
                    <div className="border flex justify-center space-x-3 mt-3 p-2">
                        <button className="hover:text-[#666]"><Minus/></button>
                        {/*Mettre un Input */}
                        <span>1</span>
                        <button className="hover:text-[#666]"><Plus/></button>
                    </div>
                </div>
                <div className="mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi distinctio doloribus expedita nihil quaerat quas quod! Enim quos ut voluptatum? Aperiam assumenda eaque laboriosam laudantium officiis recusandae tempora voluptate.</p>
                </div>
                <Button className="w-full mt-5" variant="defaultBlack">Ajouter au panier </Button>
            </div>
        </div>
    )
}