import {auth} from "@/auth";
import {stripe} from "@/stripe";
import {prisma} from "@/db/db";
import {id} from "postcss-selector-parser";


export default async function OrderProduct() {
    const session = await auth();
    const p = await prisma.orderStripe.findMany({
        where: {
            userId: Number(session?.user?.id)
        },
        select:{
            totalAmount:true,
           items:true
        }

    })
    console.log(p)


    return (
        <div>
        </div>
    )
}
