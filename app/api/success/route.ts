// @ts-nocheck

import {NextRequest, NextResponse} from "next/server";
import {stripe} from "@/stripe";
import Stripe from "stripe";
import {auth} from "@/auth";


/**
 * Handler pour la méthode HTTP GET.
 * Récupère les informations d'un client Stripe à partir d'un token fourni dans les paramètres de la requête.
 * Cette route est protégée par une authentification.
 *
 * @async
 * @function GET
 * @param {NextRequest} request - L'objet de la requête HTTP provenant de Next.js.
 * @returns {Promise<NextResponse>} La réponse HTTP, sous forme de JSON.
 */
export const GET = auth(async function GET(request: NextRequest) {
    if (!request.auth) return NextResponse.json({message: "Not authenticated"}, {status: 401})

    try {
        // Récupère les paramètres de recherche (query params) de l'URL
        const {searchParams} = new URL(request.url);
        const token = searchParams.get('token');
        const quantity =  searchParams.get('quantity');
        if (!token) {
            return NextResponse.json({error: "Erreur de token"},{status:400});
        }
        // Récupère les informations du client Stripe associé au token
        const customer = await stripe.customers.retrieve(token);
        // Vérifie si le client a été supprimé
        if ((customer as Stripe.DeletedCustomer).deleted){
            return NextResponse.json({error: "Customer not found"},{status:404});
        }
        // Cast du client en Stripe.Customer pour accéder aux informations
        const customerData = customer as Stripe.Customer;
        // Retourne l'email du client dans la réponse
        return  NextResponse.json({email:customerData.email},{status:200})

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({error: "Erreur lors de la requête GET"}, {status: 500})

    }
})
