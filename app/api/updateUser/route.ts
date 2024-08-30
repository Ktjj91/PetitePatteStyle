import {prisma} from "@/db/db";
import {NextResponse} from "next/server";
import {UpdateUserSchema} from "@/schemas";
import {auth} from "@/auth";

/**
 * Handler pour la méthode HTTP PUT. Met à jour les informations d'un utilisateur dans la base de données.
 *
 * @async
 * @function PUT
 * @param {Request} request - L'objet Request provenant de la requête HTTP.
 * @returns {Promise<Response>} La réponse HTTP, sous forme de JSON.
 */
export async function PUT(request: Request) {
    // Authentifie l'utilisateur
    const session = await auth();
    // Si l'utilisateur n'est pas authentifié, retourne une réponse 401 (Non autorisé)
    if (!session?.user) return NextResponse.json({message: "Not authenticated"}, {status: 401});
    try {
        // Récupère les données du formulaire envoyées dans la requête
        const formData = await request.formData();
        // Transforme les données du formulaire en un objet JavaScript
        const formObject: Record<string, FormDataEntryValue> = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        // Valide les données du formulaire avec le schéma `UpdateUserSchema`
        const result = await UpdateUserSchema.safeParseAsync(formObject);
        if (!result.success) {
            return NextResponse.json({message: result.error.errors}, {status: 400});
        }
        // Si la validation échoue, retourne une réponse 400 (Mauvaise requête) avec les erreurs
        const {userId, name} = result.data;

        // Vérifie si `userId` est un nombre valide
        if (isNaN(userId)) {
            return NextResponse.json({message: "Invalid userId"}, {status: 400});
        }
        // Vérifie si l'utilisateur connecté est autorisé à modifier ces informations
        if (Number(session.user?.id) !== userId) {
            return NextResponse.json({message: "Not authorized"}, {status: 403});
        }
        // Met à jour les informations de l'utilisateur dans la base de données
        const updateUser = await prisma.user.update({
            where: {id: userId},
            data: {
                name
            }
        })
        // Retourne une réponse avec les informations mises à jour
        return NextResponse.json({success: updateUser})
    } catch (error) {
        // En cas d'erreur, retourne une réponse 500 (Erreur interne du serveur)
        return NextResponse.json({message: error}, {status: 500})
    }
}