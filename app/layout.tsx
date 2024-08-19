import type {Metadata} from "next";
import {Open_Sans as FontSans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {auth} from "@/auth";


const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans"});

export const metadata: Metadata = {
    title: "PetitePatteStyle",
    description: "Bienvenue dans notre Boutique pour Chiens de petite taille: nous propose vêtements pour chiens, t-shirt, Habits et accessoires pour chien",
};


export default async function RootLayout({children}: Readonly<{
    children: React.ReactNode,
}>) {

    const session = await auth();

    return (
        <html lang="en">
        <body className={cn("flex flex-col min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Navigation session={session}/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
