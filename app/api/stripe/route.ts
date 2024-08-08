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
                    description:item.description,
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
        const sessionId = checkoutSession.id
        // const session = await stripe.checkout.sessions.retrieve(sessionId);
        // const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
        //     limit: 100,
        // });
        // const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string);
        // const transactionSummary = {
        //     customer: session.customer,
        //     paymentStatus: paymentIntent.status,
        //     amountTotal: paymentIntent.amount / 100, // Montant en unités monétaires (ex: USD)
        //     currency: paymentIntent.currency,
        //     items: lineItems.data.map(item => ({
        //         name: item.description,
        //         quantity: item.quantity,
        //         price: item.amount_total / 100, // Montant unitaire
        //     })),
        // };
        // console.log(transactionSummary)

        return NextResponse.json({msg: checkoutSession, url: checkoutSession.url}, {status: 200})


    } catch (error) {
        console.log("Erreur:", error)
        return NextResponse.json({error}, {status: 500})

    }

}