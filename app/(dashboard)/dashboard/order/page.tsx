import OrderStripe from "@/components/ui/OrderStripe";
import {auth} from "@/auth";

export default async function OrderPage() {
    const session = await auth();


    return (
        <OrderStripe session={session}/>
    )
}
