import React from 'react'
import DatableProduct from "@/components/ui/DatableProduct";
import {auth} from "@/auth";

export default async function AdminPage() {
    const session = await auth();
    return (
        <DatableProduct session={session} />
    )
}
