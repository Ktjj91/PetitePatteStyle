import {signIn} from "@/auth"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import GoogleLogo from "@/public/google.png"
import Image from "next/image";
import Link from "next/link"
import {redirect} from "next/navigation";

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
                    <Input size={50} type="text" placeholder="Entrer votre email"/>
                    <Input type="password" placeholder="Entrer votre mot de passe"/>
                </div>

                <Button size="xl" variant="defaultBlack">Connexion/S’inscrire</Button>
            </form>
            <section className="flex items-center justify-center space-x-3  ">
                <Separator className="w-40 "/>
                <p>Ou</p>
                <Separator className="w-40"/>
            </section>
            <form action={async () => {
                "use server"
                await signIn("google",redirect("/"))
            }} className="flex  justify-center items-center flex-col">
                <Button type="submit" variant="outline">
                    <Image className="mr-3" width={20} src={GoogleLogo} alt="Google logo"/>
                    Continuer avec Google
                </Button>
                <p className="text-center text-[12px]">En continuant, vous acceptez notre <Link
                    className="hover:underline text-[#2D68A6]" href="/">Politique de confidentialité &
                    cookies</Link> et <Link className="hover:underline text-[#2D68A6]" href="/">Conditions
                    Générales.</Link></p>
            </form>

        </div>


    )
}