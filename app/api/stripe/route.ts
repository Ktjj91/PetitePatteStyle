// @ts-nocheck

import {NextResponse, NextRequest} from "next/server";
import {stripe} from "@/stripe";
import {prisma} from "@/db/db";
import {auth} from "@/auth";


export const POST = auth(async function POST(request: NextRequest) {
    if (!request.auth) return NextResponse.json({message: "Not authenticated"}, {status: 401});

    try {
        const data: any = await request.json();
        const items = data.items;
        const totalAmount = items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);

        const line_items = items.map((item: any) => ({
            price_data: {
                currency: 'eur',
                product_data: {
                    name: item.name,
                    description: item.description,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['FR'],
            },
            customer: data?.stripeCustomerId,
            mode: "payment",
            success_url: `http://localhost:3000/success?token=${data?.stripeCustomerId}`,
            cancel_url: "http://localhost:3000/cancel",
            line_items
        })
        if (checkoutSession) {
            await prisma.orderStripe.create({
                data: {
                    customerId: data?.stripeCustomerId,
                    sessionId: checkoutSession?.id,
                    paymentIntentId: checkoutSession.payment_intent as string || '',
                    totalAmount,
                    currency: "eur",
                    paymentStatus: "",
                    userId: data.userId,
                    items: {
                        create: items.map((item: any) => ({
                            name: item.name,
                            description: item.description,
                            quantity: item.quantity,
                            price: item.price * 100,
                            image: item.image,
                        }))
                    }
                }
            });
             items.map(async (item:any) => {
                 await prisma.products.update({
                     where:{id:item.id},
                     data:{
                         quantity: {
                             decrement:item.quantity
                         }
                     }
                 })
             })

    }

    return NextResponse.json({msg: checkoutSession, url: checkoutSession.url}, {status: 200})

}

catch
(error)
{
    console.log("Erreur:", error)
    return NextResponse.json({error}, {status: 500})

}

})
