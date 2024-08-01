import {Button} from "@/components/ui/button";
import {auth, signIn} from "@/auth";
import {FaGoogle, FaFacebookF} from "react-icons/fa";


export async function SignIn() {
    const session = await auth()


    return (
        <div className="container mt-5 flex flex-col items-center  space-y-4 h-screen ">
            <h1 className="font-bold text-4xl">Connexion</h1>
            <div className=" mt-5 flex flex-col items-center justify-center  xl:flex-row space-x-2">
                <form className="mb-2" action={async () => {
                    "use server"
                    await signIn('google', {redirectTo: '/dashboard/settings'})
                }}>
                    <Button type="submit" variant="defaultBlack">
                        <FaGoogle/>
                        <span className="mx-1">Continuer avec Google</span>
                    </Button>
                </form>
                <form className="mb-2" action={async () => {
                    "use server"
                    await signIn('facebook', {redirectTo: '/dashboard/settings'})
                }}>
                    <Button type="submit" variant="defaultBlack">
                        <FaFacebookF/>
                        <span className="mx-1">Continuer avec Facebook</span>
                    </Button>
                </form>
            </div>
        </div>
    )
}