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

    console.log(ordersStripe)

    return (
        <>
            <table
                className="mt-3 mx-auto max-w-[1000px] w-full table-auto  text-center border border-gray-200  border-collapse border-spacing-1.5">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Prix unitaire</th>
                    <th>Prix Total</th>
                    <th>Quantité</th>
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
                                        <Image src={item.image} alt={item.name} width={50} height={50} />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price / 100}€</td>
                                {itemIndex === 0 ? (
                                    <td rowSpan={order.items.length}>{order.totalAmount}€</td>
                                ) : null}
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
