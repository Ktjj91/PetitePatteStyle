// @ts-nocheck

import {NextResponse, NextRequest} from "next/server";
import {stripe} from "@/stripe";
import {prisma} from "@/db/db";
import {auth} from "@/auth";

/**
 * Handler pour la méthode HTTP POST.
 * Crée une session de paiement Stripe, enregistre la commande dans la base de données et met à jour les quantités de produits.
 * Cette route est protégée par une authentification.
 *
 * @async
 * @function POST
 * @param {NextRequest} request - L'objet de la requête HTTP provenant de Next.js.
 * @returns {Promise<NextResponse>} La réponse HTTP, sous forme de JSON.
 */
export const POST = auth(async function POST(request: NextRequest) {
    if (!request.auth) return NextResponse.json({message: "Not authenticated"}, {status: 401});

    try {
        const data: any = await request.json();
        const items = data.items;
        // Calcule le montant total de la commande
        const totalAmount = items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
        // Crée les éléments de ligne pour la session de paiement Stripe
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
        // Crée une session de paiement Stripe
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['FR'],
            },
            customer: data?.stripeCustomerId,
            mode: "payment",
            success_url: `https://petitepattestyle.com/success?token=${data?.stripeCustomerId}`,
            cancel_url: "https://petitepattestyle.com/cancel",
            line_items
        })
        // Enregistre la commande dans la base de données si la session de paiement a été créée
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
            // Met à jour les quantités des produits dans la base de données
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
