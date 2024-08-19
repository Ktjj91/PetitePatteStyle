"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormEvent, useEffect, useState} from "react";
import {Session} from "next-auth";
import {formData} from "zod-form-data";

interface FormUpdateUserProps  {
    session:Session | null;
    onUpdateUser:(formData:FormData) => Promise<any>
}
export default function FormUpdateUser({session,onUpdateUser} : FormUpdateUserProps) {
    const [name, setName] = useState<string>(session?.user?.name || "");
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        try {
            form.set("id",String(session?.user?.id))
            form.set("name",name);
            await fetch("/api/updateUser",{
                method:"PUT",
                body:form
            })
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <section>
            <h1 className="text-4xl text-center font-bold">Votre profile</h1>
            <form className="mt-4 p-4" onSubmit={handleSubmit}>
                <Label htmlFor="name">Nom:</Label>
                <Input onChange={(e) => setName(e.target.value)} className="mb-4" value={name} id="name" name="name" type="text"/>
                <Label>Email:</Label>
                <Input className="mb-4 bg-secondary" value={session?.user?.email as string} disabled type="email"/>
                <Input name="userId" type="hidden" value={session?.user?.id}/>
                <div className=" flex items-center justify-center mt-4">
                    <Button type="submit" className="w-full" variant="defaultBlack">Changer</Button>
                </div>
            </form>
        </section>
    )
}
