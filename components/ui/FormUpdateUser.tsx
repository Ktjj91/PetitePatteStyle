"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";

interface FormUpdateUserProps  {
    user:any;
    session:any;
    onUpdateUser:any
}
export default function FormUpdateUser({user,session,onUpdateUser} : FormUpdateUserProps) {
    const [name, setName] = useState<string>(user?.name || "");
    const [password, setPassword] = useState<string>(user?.password || "");

    return (
        <section>
            <h1 className="text-4xl text-center font-bold">Votre profile</h1>
            <form className="mt-4 p-4" action={onUpdateUser}>
                <Label htmlFor="name">Nom:</Label>
                <Input onChange={(e) => setName(e.target.value)} className="mb-4" value={name} id="name" name="name" type="text"/>
                <Label>Email:</Label>
                <Input className="mb-4 bg-secondary" value={user?.email as string} disabled type="email"/>
                <Label  htmlFor="password">Mot de passe:</Label>
                <Input onChange={(e) => setPassword(e.target.value)}  className="mb-4" value={password} id="password" name="password" type="password"/>
                <Input name="sessionToken" type="hidden" value={session?.sessionToken}/>
                <div className=" flex items-center justify-center mt-4">
                    <Button type="submit" className="w-full" variant="defaultBlack">Changer</Button>
                </div>
            </form>
        </section>
    )
}
