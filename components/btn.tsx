import { signIn } from "next-auth/react"
import {Button} from "@/components/ui/button";

export function Btn() {
    return <Button variant="defaultBlack" onClick={() => signIn("credentials",{})}>Sign In</Button>
}