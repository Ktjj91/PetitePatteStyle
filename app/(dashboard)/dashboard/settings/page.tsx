import {auth} from "@/auth";
import FormUpdateUser from "@/components/ui/FormUpdateUser";
import {redirect} from "next/navigation";
import {signIn} from "next-auth/react";

const dns = process.env.NODE_ENV === 'production' ? `${process.env.DNS}/api/updateUser` : 'http://localhost:3000/api/updateUser';


export default async function SettingsPage() {
    const session = await auth();
    if (!session?.user) return redirect("/");
    const updateUser = async (formData: FormData) => {
        "use server"
        try {
            await fetch(dns, {
                method: "PUT",
                body: formData,
            })
            await signIn("google",{redirect:false});
        } catch (error) {
            console.error("error : ", error);
            throw new Error("Erreur lors de la modification de l'utilisateur")
        }
        finally {
            redirect("/dashboard/settings");
         }
    }

    return (
        <FormUpdateUser onUpdateUser={updateUser} session={session}/>
    )
}
