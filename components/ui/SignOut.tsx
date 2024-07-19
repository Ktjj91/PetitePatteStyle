"use client"
import {signOut} from "@/auth"
import {Button} from "@/components/ui/button";

export function SignOut() {


    return (
        <form
            action={async () => {
                await signOut()
            }}
        >
            <Button className="w-full" variant="red">Déconnexion</Button>
        </form>
    )
}