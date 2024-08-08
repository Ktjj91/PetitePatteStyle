import {NextResponse} from "next/server";
import {stripe} from "@/stripe";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export async function GET(request: NextResponse) {
    const {searchParams} = new URL(request.url);
    const customerId = searchParams.get('customerId');

    if (!customerId) {
        return NextResponse.json({error: 'Customer ID is required'}, {status: 400});
    }

    try {
        let hasMore = true;
        let sessions: any = [];
        let lastSessionId = null;

        // Récupérer toutes les sessions de checkout pour ce client
        while (hasMore) {
            const result: any = await stripe.checkout.sessions.list({
                customer: customerId,
                limit: 100,
            });

            sessions = sessions.concat(result.data);
            hasMore = result.has_more;
            if (hasMore) {
                lastSessionId = result.data[result.data.length - 1].id;
            }

            // Récupérer les résumés des transactions pour chaque session
            const transactionSummaries = await Promise.all(
                sessions.map(async (session:any) => {
                    // Récupérer les line items pour cette session
                    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
                        limit: 100,
                    });

                    // Récupérer le payment_intent pour obtenir les détails du paiement
                    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);

                    // Construire le résumé de la transaction
                    return {
                        sessionId: session.id,
                        customer: session.customer,
                        paymentStatus: paymentIntent.status,
                        amountTotal: paymentIntent.amount / 100, // Montant en unités monétaires (ex: USD)
                        currency: paymentIntent.currency,
                        items: lineItems.data.map(item => ({
                            name: item.description,
                            quantity: item.quantity,
                            price: item.amount_total / 100, // Montant unitaire
                        })),
                    };
                })
            );

            return NextResponse.json({transactionSummaries}, {status: 200});

        }

    } catch (e) {
        console.error(e)
        return NextResponse.json({error: e}, {status: 400});
    }
}