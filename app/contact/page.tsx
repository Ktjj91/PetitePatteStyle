"use client"
// @ts-ignore
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import type {Metadata} from "next";


/**
 * Composant pour la page de contact.
 * Permet aux utilisateurs d'envoyer un message via un formulaire.
 *
 * @returns {JSX.Element} La structure de la page de contact avec le formulaire.
 */
export default function ContactPage() {
    const router = useRouter();
    /** @type {[string, Function]} name - État pour gérer le nom de l'utilisateur. */
    const [name, setName] = useState("");
    /** @type {[string, Function]} email - État pour gérer l'adresse email de l'utilisateur. */
    const [email, setEmail] = useState("");
    /** @type {[string, Function]} message - État pour gérer le message de l'utilisateur. */
    const [message, setMessage] = useState("");
    /** @type {[string, Function]} subject - État pour gérer le sujet du message de l'utilisateur. */
    const [subject, setSubject] = useState("");
    /** @type {[string, Function]} orderNumber - État pour gérer le numéro de commande de l'utilisateur. */
    const [orderNumber, setOrderNumber] = useState("");
    /**
     * Gère la soumission du formulaire de contact.
     * Envoie les données du formulaire à l'API et redirige l'utilisateur vers la page d'accueil en cas de succès.
     *
     * @param {FormEvent<HTMLFormElement>} e - L'événement de soumission du formulaire.
     * @returns {Promise<void>} - Une promesse qui résout après la soumission du formulaire.
     */
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            form.set("name", name);
            form.set("email", email);
            form.set("message", message);
            form.set("subject", subject);
            form.set("orderNumber", orderNumber);

            const response = await fetch("/api/send", {
                method: "POST",
                body: form
            })
            if (!response.ok) {
                throw new Error("Error occured");
            }
            router.push("/");
        } catch (error) {
            console.log("error : ", error);
            throw new Error("Fetch fail");
        }
    }
    /**
     * Rendu du composant ContactPage.
     * Affiche un formulaire de contact où l'utilisateur peut saisir son nom, email, sujet, numéro de commande et message.
     *
     * @returns {JSX.Element} Le formulaire de contact.
     */
    return (
        <section className="max-w-[1000px] mx-auto p-3">
            <Card className="w-full  ">
                <CardHeader>
                    <CardTitle>Contactez-nous</CardTitle>
                    <CardDescription>
                        Remplissez le formulaire ci-dessous pour nous faire part de vos questions ou de vos
                        commentaires.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nom</Label>
                                <Input onChange={(e) => setName(e.target.value)} value={name} id="name"
                                       placeholder="Entrez votre nom"/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="email"
                                       placeholder="Entrez votre email"/>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Sujet</Label>
                            <Input onChange={(e) => setSubject(e.target.value)} id="subject"
                                   placeholder="Entrez le sujet de votre message"/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="order-number">Numéro de commande</Label>
                            <Input onChange={(e) => setOrderNumber(e.target.value)} value={orderNumber}
                                   id="order-number" type="number" placeholder="Entrez votre numéro de commande"/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message"
                                      placeholder="Entrez votre message" className="min-h-[150px]"/>
                        </div>
                        <Button type="submit" variant="defaultBlack" className="w-full">
                            Envoyer
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>

    )
}