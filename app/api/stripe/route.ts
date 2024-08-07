import {NextResponse, NextRequest} from "next/server";
import {stripe} from "@/stripe";


export async function POST(request: NextRequest) {
    try {

        const data:any = await request.json();

        const items = data.items;
        const line_items = items.map((item:any) => ({
            price_data: {
                currency: 'eur',
                product_data: {
                    name: item.name,
                    description:item.description
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
            success_url: "http://localhost:3000/success?token" + data?.stripeCustomerId,
            cancel_url: "http://localhost:3000/cancel?token" + data?.stripeCustomerId,
            line_items
        })
        return NextResponse.json({msg: checkoutSession, url: checkoutSession.url}, {status: 200})


    } catch (error) {
        console.log("Erreur:", error)
        return NextResponse.json({error}, {status: 500})

    }

}