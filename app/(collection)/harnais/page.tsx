import React from 'react'
import type {Metadata} from "next";
import HarnaisPage from "@/app/(collection)/harnais/Harnais";

export const metadata: Metadata = {
    title: "Harnais pour chien | Petitepattestyle",
    description: "Harnais pour chien de petite taille"
};


export default function Page() {
    return (
       <>
           <HarnaisPage />
       </>
    )
}
