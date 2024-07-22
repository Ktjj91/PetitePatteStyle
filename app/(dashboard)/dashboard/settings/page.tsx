import {auth} from "@/auth";
import FormUpdateUser from "@/components/ui/FormUpdateUser";
import {redirect} from "next/navigation";

const updateUser = async (formData: FormData) => {
    "use server"
    await fetch("http://localhost:3000/api/updateUser", {
        method: "PUT",
        body: formData,
    })

}
export default async function SettingsPage() {
    const session = await auth();
    const user = session;
    if (!session) return redirect("/");

    return (
        <FormUpdateUser onUpdateUser={updateUser} user={session?.user} session={session}/>
    )
}
