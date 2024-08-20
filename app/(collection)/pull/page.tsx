import React from 'react'
import PullPage from "@/app/(collection)/pull/PullPage";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Pull pour chien | Petitepattestyle",
    description: "Pull pour chien de petite taille"
};


export default function Page() {
    return (
        <>
            <PullPage />
        </>
    )
}
