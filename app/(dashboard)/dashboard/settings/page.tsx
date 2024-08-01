import {auth} from "@/auth";
import FormUpdateUser from "@/components/ui/FormUpdateUser";
import {redirect} from "next/navigation";
const updateUser = async (formData:FormData) => {
    "use server"
    try {
           await fetch("http://localhost:3000/api/updateUser", {
               method: "PUT",
               body: formData
           })
    } catch (error) {
        console.log("error : ",error);
        throw new Error("Erreur lors de la modifcation de l'utilisateur")

    }finally {
        redirect("/dashboard/settings")
    }


}
export default async function SettingsPage() {
    const session = await auth();
    if (!session?.user) return redirect("/");

    return (
        <FormUpdateUser onUpdateUser={updateUser}  session={session}/>
    )
}
