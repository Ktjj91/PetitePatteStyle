import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import GoogleLogo from "@/public/google.png"
import Image from "next/image";
import Link from "next/link"
import {useState, useTransition} from "react";
import {useForm} from "react-hook-form";
import * as z from "zod"
import {LoginSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {login} from "@/actions/login";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import FormError from "@/components/form-error";
import FormSucess from "@/components/form-sucess";
import {loginGoogle} from "@/actions/loginGoogle";
import {signIn} from "@/auth";
import ButtonGoogle from "@/components/ui/ButtonGoogle";


export function SignIn() {
    // const [error, setError] = useState<string | undefined>("")
    // const [success, setSuccess] = useState<string | undefined>("")
    // const [isPending, startTransition] = useTransition();
    // const form = useForm<z.infer<typeof LoginSchema>>({
    //     resolver: zodResolver(LoginSchema),
    //     defaultValues: {
    //         email: "",
    //         password: ""
    //     }
    // })
    // const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    //     setSuccess("");
    //     setError("");
    //     startTransition(() => {
    //         login(values).then((data) => {
    //             setError(data?.error)
    //             setSuccess(data?.success)
    //         });
    //     });
    // }
    return (
        <div className=" container mt-5 flex flex-col items-center justify-center space-y-4 ">
            <h1 className="font-bold text-xl">Connexion</h1>
            <form action={async () => {
                "use server"
                await signIn('google', {redirectTo: '/dashboard/settings'})
            }}>
                <Button type="submit" variant="outline">
                    <Image className="mr-3" width={20} src={GoogleLogo} alt="Google logo"/>
                    Continuer avec Google
                </Button>

            </form>
            <form action={async () => {
                "use server"
                await signIn('facebook', {redirectTo: '/dashboard/settings'})
            }}>
                <Button type="submit" variant="outline">
                    Continuer avec Facebook
                </Button>

            </form>

        </div>


        // <div className=" container mt-5 flex flex-col items-center justify-center space-y-4">
        //     <h1 className="font-bold text-xl">Connexion</h1>
        //     <Form {...form}>
        //         <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        //             <div className="space-y-4">
        //                 <FormField name="email" control={form.control} render={({field}) => (
        //                     <FormItem>
        //                         <FormLabel>
        //                             Email
        //                         </FormLabel>
        //                         <FormControl>
        //                             <Input size={50} {...field} type="email" placeholder="Entrer votre email"
        //                                    disabled={isPending}/>
        //                         </FormControl>
        //                         <FormMessage>
        //                         </FormMessage>
        //                     </FormItem>
        //                 )}/>
        //                 <FormField name="password" control={form.control} render={({field}) => (
        //                     <FormItem>
        //                         <FormLabel>
        //                             Password
        //                         </FormLabel>
        //                         <FormControl>
        //                             <Input size={50} {...field} type="password" placeholder="******"
        //                                    disabled={isPending}/>
        //                         </FormControl>
        //                         <FormMessage>
        //                         </FormMessage>
        //                     </FormItem>
        //
        //                 )}/>
        //                 <FormError message={error}/>
        //                 <FormSucess message={success}/>
        //                 <Button type='submit' variant={"defaultBlack"} className="w-full" disabled={isPending}>
        //                     Connexion
        //                 </Button>
        //             </div>
        //         </form>
        //     </Form>
        //     <section className="flex items-center justify-center space-x-3  ">
        //         <Separator className="w-40 "/>
        //         <p>Ou</p>
        //         <Separator className="w-40"/>
        //     </section>
        //     <ButtonGoogle/>
        //     <p className="text-center text-[12px]">En continuant, vous acceptez notre <Link
        //         className="hover:underline text-[#2D68A6]" href="/">Politique de confidentialité &
        //         cookies</Link> et <Link className="hover:underline text-[#2D68A6]" href="/">Conditions
        //         Générales.</Link></p>
        // </div>


        // <div className="container mt-5 flex flex-col items-center justify-center space-y-4">
        // <h1 className="font-bold text-xl">Connexion</h1>
        // <form
        //
        //         className="flex flex-col items-center space-y-3"
        //     >
        //         <div className=" flex flex-col space-y-3">
        //             <Input name="email" size={50} type="text" placeholder="Entrer votre email"/>
        //             <Input name="password" type="password" placeholder="Entrer votre mot de passe"/>
        //         </div>
        //
        //         <Button type="submit" size="xl" variant="defaultBlack">Connexion/S’inscrire</Button>
        //     </form>
        //     <section className="flex items-center justify-center space-x-3  ">
        //         <Separator className="w-40 "/>
        //         <p>Ou</p>
        //         <Separator className="w-40"/>
        //     </section>
        //
        //     <form  className="flex  justify-center items-center flex-col">
        //         <Button type="submit" variant="outline">
        //             <Image className="mr-3" width={20} src={GoogleLogo} alt="Google logo"/>
        //             Continuer avec Google
        //         </Button>
        //         <p className="text-center text-[12px]">En continuant, vous acceptez notre <Link
        //             className="hover:underline text-[#2D68A6]" href="/">Politique de confidentialité &
        //             cookies</Link> et <Link className="hover:underline text-[#2D68A6]" href="/">Conditions
        //             Générales.</Link></p>
        //     </form>

// </div>

)
}