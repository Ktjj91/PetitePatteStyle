import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/db/db";
import {auth} from "@/auth";

/**
 * Gestionnaire pour la méthode HTTP GET.
 * Récupère les 10 dernières commandes de l'utilisateur authentifié.
 *
 * @async
 * @function GET
 * @param {NextRequest} request - L'objet représentant la requête HTTP entrante.
 * @returns {Promise<NextResponse>} L'objet réponse contenant les commandes de l'utilisateur ou un message d'erreur.
 */
export async function GET(request: NextRequest) {
    const session = await auth();
    if(!session) return NextResponse.json({message: "Not authenticated"}, {status: 401});
    try {
        const sessionUserId = Number(session?.user.id);
        const {searchParams} = new URL(request.url);
        const userId = Number(searchParams.get("id"));
        // Vérifie si l'ID de l'utilisateur dans la requête correspond à l'ID de l'utilisateur authentifié
        if(userId === sessionUserId){
            // Récupère les 10 dernières commandes de l'utilisateur, triées par date de mise à jour
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
