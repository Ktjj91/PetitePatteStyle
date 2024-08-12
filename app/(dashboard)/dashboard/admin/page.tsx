import React from 'react'
import DatableProduct from "@/components/ui/DatableProduct";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function AdminPage() {
    const session = await auth();
    if(session?.user.role !== "ADMIN") return redirect("/dashboard/settings");
    return (
        <DatableProduct session={session} />
    )
}
