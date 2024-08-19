import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/db/db";
import {auth} from "@/auth";


export async function GET(request: NextRequest) {
    const session = await auth();
    if(!session) return NextResponse.json({message: "Not authenticated"}, {status: 401});
    try {
        const sessionUserId = Number(session?.user.id);
        const {searchParams} = new URL(request.url);
        const userId = Number(searchParams.get("id"));
        if(userId === sessionUserId){
            const ordersUserStripe = await prisma.orderStripe.findMany({
                where:{
                    userId:userId
                },
                orderBy:{
                    updatedAt:"desc"
                },
                take:10,
                select:{
                    totalAmount:true,
                    items:true,
                    id:true
                }
            })
            return NextResponse.json({data:ordersUserStripe},{status:200});
        }
        return NextResponse.json({data:"User not authorized"},{status:404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({error:"Erreur Server"},{status:500});
    }


}
