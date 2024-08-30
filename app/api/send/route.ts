import { Resend } from 'resend';
import EmailTemplate from "@/components/email-template";
import {NextRequest, NextResponse} from "next/server";
// Initialise l'instance Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Handler pour la méthode HTTP POST.
 * Envoie un email à partir des données soumises via un formulaire.
 *
 * @async
 * @function POST
 * @param {NextRequest} request - L'objet de la requête HTTP provenant de Next.js.
 * @returns {Promise<NextResponse>} La réponse HTTP, sous forme de JSON.
 */
export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const email = formData.get('email') as string;
    const orderNumber = formData.get('order-number') as string;
    try {
        // Envoie l'email en utilisant l'API Resend
        const { data, error } = await resend.emails.send({
            from: "sav@petitepattestyle.com",
            to: "sav@petitepattestyle.com",
            subject: subject,
            react: EmailTemplate({message,name,subject,orderNumber}),
            replyTo:email
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
