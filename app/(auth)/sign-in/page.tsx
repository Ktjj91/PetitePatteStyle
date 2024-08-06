import {SignIn} from "@/app/(auth)/sign-in/sign-in";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function Login() {
    const session = await auth();
    if (session?.user) redirect('/')
    return (
        <section>
            <SignIn/>
        </section>
    );
}
