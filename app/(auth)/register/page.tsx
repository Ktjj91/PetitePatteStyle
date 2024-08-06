"use client";
import {Button} from "@/components/ui/button";
import {FaGoogle, FaFacebookF} from "react-icons/fa";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {Separator} from "@/components/ui/separator";
import {useState, useTransition} from "react";
import {signInWithGoogle} from "@/actions/loginGoogle";
import {signInWitFacebook} from "@/actions/loginFacebook";
import {useForm} from "react-hook-form";
import {LoginSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import FormError from "@/components/form-error";
import FormSucess from "@/components/form-sucess";
import Link from "next/link";
import {register} from "@/actions/register";
import {signInWithCredentials} from "@/actions/credentials";
import {applyNextWorkerFixture} from "next/dist/experimental/testmode/playwright/next-worker-fixture";


export default function Register() {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setSuccess("");
        setError("");
        startTransition(() => {
            register(values).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            }).then(data => {
                signInWithCredentials(values).then(data => {
                    setError(data?.error);
                    setSuccess(data?.success);
                }).then(data => {
                    router.push("/dashboard/settings");
                })
            });
        });

    }
    return (
        <div className="container mt-5 flex flex-col items-center  space-y-4 h-screen ">
            <h1 className="font-bold text-4xl">Inscription</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 max-w-[700px] w-full'>
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input {...field}
                                           placeholder="johnDoe@example.com"
                                           type='email'
                                           disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage>
                                </FormMessage>
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="password" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input {...field}
                                           placeholder="********"
                                           type='password'
                                           disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage>

                                </FormMessage>
                            </FormItem>
                        )}/>
                        <FormError message={error}/>
                        <FormSucess message={success}/>
                        <Button variant="defaultBlack" type='submit' className="w-full" disabled={isPending}>
                            Connexion
                        </Button>
                    </div>
                </form>
            </Form>
            <p className="text-[0.7em] ">En continuant, vous acceptez les <Link
                className=" text-blue-500 hover:underline" href="/">conditions génerale de PetitePatteStyle</Link> et
                confirmez que vous avez lu la <Link className="text-blue-500 hover:underline" href="/">politique de
                    confidentialité de PetitePatteStyle.</Link></p>
            <Separator className="max-w-[700px] w-full"/>
            <div className=" mt-5 flex flex-col items-center justify-center gap-y-3">
                <form className="mb-2" action={signInWithGoogle}>
                    <Button type="submit" variant="defaultBlack">
                        <FaGoogle/>
                        <span className="mx-1">Continuer avec Google</span>
                    </Button>
                </form>
                <form className="mb-2" action={signInWitFacebook}>
                    <Button type="submit" variant="defaultBlack">
                        <FaFacebookF/>
                        <span className="mx-1">Continuer avec Facebook</span>
                    </Button>
                </form>
                <Link className="hover:underline" href="/sign-in">Connecter vous !</Link>

            </div>
        </div>
    )
}
