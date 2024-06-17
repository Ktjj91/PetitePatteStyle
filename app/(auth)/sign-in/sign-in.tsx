import { signIn } from "@/auth"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import GoogleLogo from "@/public/google.png"
import Image from "next/image";

export function SignIn() {
    return (
        <div className="container mt-5 flex flex-col items-center justify-center space-y-4">
            <h1 className="font-bold text-xl">Connexion/S’inscrire</h1>
            <form
                className="flex flex-col items-center space-y-3"
                action={async () => {
                    "use server"
                    await signIn("credentials")
                }}
            >
                <div className=" flex flex-col space-y-3">
                    <Input size={50} type="text" placeholder="Entrer votre email" />
                    <Input type="password" placeholder="Entrer votre mot de passe" />
                </div>

                <Button size="xl" variant="defaultBlack">Connexion/S’inscrire</Button>
            </form>
            <section className="flex items-center justify-center space-x-3  ">
                <Separator className="w-40 "/>
                <p>Ou</p>
                <Separator className="w-40"/>
            </section>
            <Button variant="outline">
                <Image className="mr-3" width={20} src={GoogleLogo} alt="Google logo" />
                Continuer avec Google
            </Button>

        </div>

    )
}