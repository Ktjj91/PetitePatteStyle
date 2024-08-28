import type {Metadata} from "next";
import {Open_Sans as FontSans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {auth} from "@/auth";

const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans"});
import Script from "next/script";

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
        <Script id="axeptio-script" strategy="afterInteractive">
            {`
            window.axeptioSettings = {
              clientId: "66cc916e20eb305e04aaeefe",
              cookiesVersion: "petitepattestyle-fr-EU",
              googleConsentMode: {
                default: {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  wait_for_update: 500
                        }
                      }
                    };
                   (function(d, s) {
                      var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                      e.async = true; e.src = "//static.axept.io/sdk.js";
                      t.parentNode.insertBefore(e, t);
                    })(document, "script");
            `}
        </Script>
        </body>
        </html>
    );
}
