import React from 'react'
import CollierPage from "@/app/(collection)/collier/CollierPage";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Harnais pour chien | Petitepattestyle",
    description: "Harnais pour chien de petite taille"
};


export default function Page() {
    return (
       <>
           <CollierPage />
       </>
    )
}
