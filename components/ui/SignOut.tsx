
import { signOut } from "next-auth/react"
import {Button} from "@/components/ui/button";

export function SignOut() {
    return <Button variant="red" onClick={() => signOut()}>Déconnexion</Button>
}