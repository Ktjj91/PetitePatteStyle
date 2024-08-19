import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {ProductType} from "@/types/ProductType";

interface ProductProps {
    product:ProductType
}

export default function Card({product} : ProductProps) {
    return (
       <>
           <Link  key={product.id} href={`/product/${product?.id}`}>
               <div className=" p-3 bg-primary flex flex-col items-center justify-center border border-primary shadow-xl hover:translate-y-[10px] transition-all ">
                   <Image priority className="border shadow-md" width={100} height={100} src={product.image as string} alt={product.name} />
                   <p className="text-sm font-bold">{product?.name}</p>
                   <p className="font-bold">{product.price}€</p>
               </div>
           </Link>
       </>
    )
}
