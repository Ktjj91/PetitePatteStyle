"use client"
import {useState, useEffect} from "react";
import {Session} from "next-auth";
import {ItemOrder, OrderStripeType} from "@/types/OrderStripeType";
import Image from "next/image";
import Link from "next/link";

interface SessionsProps {
    session: Session | null
}

export default function OrderStripe({session}: SessionsProps) {
    const userId = session?.user.id;

    const [ordersStripe, setOrdersStripe] = useState<OrderStripeType[]>([]);
    const fetchDataOrderStripe = async () => {
        try {
            const response = await fetch(`/api/order?id=${userId}`);
            const {data} = await response.json();
            setOrdersStripe(data);

        } catch (error) {
            console.log(error);
            throw new Error('Erreur lors du fetch de la Data');
        }
    }
    useEffect(() => {
        fetchDataOrderStripe();
    }, []);

    if (ordersStripe.length === 0) return <p className="text-center  text-4xl text-center mt-3">Aucune commande
        effectuer</p>

    return (
        <>
            <div className="mt-3 mx-auto max-w-[1000px] w-full overflow-x-auto">
                <table className="w-full table-auto text-center border border-gray-200">
                    <thead>
                    <tr>
                        <th className="p-2">Image</th>
                        <th className="p-2">Nom</th>
                        <th className="p-2">Prix unitaire</th>
                        <th className="p-2">Prix Total</th>
                        <th className="p-2">Quantité</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        ordersStripe.map((order: OrderStripeType, orderIndex) => (
                            order.items.map((item: ItemOrder, itemIndex) => (
                                <tr className={`${
                                    itemIndex !== order.items.length - 1 ? 'border-none' : 'border-b border-gray-200'
                                }`} key={`${orderIndex}-${itemIndex}`}>
                                    <td>
                                        <Image className="mx-auto" src={item.image} alt={item.name} width={50} height={50}/>
                                    </td>
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2">{item.price / 100}€</td>
                                    {itemIndex === 0 ? (
                                        <td className="p-2" rowSpan={order.items.length}>{order.totalAmount}€</td>
                                    ) : null}
                                    <td className="p-2">{item.quantity}</td>
                                </tr>
                            ))
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
