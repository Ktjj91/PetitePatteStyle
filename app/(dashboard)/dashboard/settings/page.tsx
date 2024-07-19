import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {auth} from "@/auth";

// type User = {
//     name:  string
//     email: string
//     password: string,
//     emailVerified: boolean,
//     role: "USER" | "ADMIN",
//     createdAt: string,
//     updatedAt:string
//
// }
export default async function SettingsPage() {
    const session= await auth();
    const user = session?.user;

    return (
        <section>
            <h1 className="text-4xl text-center font-bold">Votre profile</h1>
            <form className="mt-4 p-4" action="">
                <Label htmlFor="name">Nom:</Label>
                <Input className="mb-4" value={user?.name as string} id="name" name="name" type="text" />
                <Label>Email:</Label>
                <Input className="mb-4 bg-secondary" value={user?.email as string} disabled type="email" />
                <Label htmlFor="password">Mot de passe:</Label>
                <Input className="mb-4" value={user?.password as string} id="password" name="password" type="password" />
                <Input name="sessionToken" type="hidden" value={session?.sessionToken} />
                <div className=" flex items-center justify-center mt-4">
                    <Button className="w-full" variant="defaultBlack">Changer</Button>
                </div>
            </form>
        </section>
    )
}
