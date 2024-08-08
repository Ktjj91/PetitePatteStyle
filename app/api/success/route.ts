import {NextRequest, NextResponse} from "next/server";
import {stripe} from "@/stripe";
import Stripe from "stripe";


export  async function GET(request: NextRequest) {
    try {
        const {searchParams} = new URL(request.url);
        const token = searchParams.get('token');
        if (!token) {
            return NextResponse.json({error: "Erreur de token"},{status:400});
        }
        const customer = await stripe.customers.retrieve(token);
        console.log(customer)
        if ((customer as Stripe.DeletedCustomer).deleted){
            return NextResponse.json({error: "Customer not found"},{status:404});
        }
        const customerData = customer as Stripe.Customer;
        return  NextResponse.json({name:customerData.email,email:customerData.email},{status:200})

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({error: "Erreur lors de la requête GET"}, {status: 500})

    }
}