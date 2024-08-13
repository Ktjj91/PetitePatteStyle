"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Logo from "../../public/petitepattestyle.png"
import Image from "next/image";
import {UserRound, ShoppingCart, Menu} from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Collapsible, CollapsibleTrigger, CollapsibleContent} from "@/components/ui/collapsible";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {SignOut} from "@/components/ui/SignOut";
import {Session} from "next-auth";
import {useCartProduct, useProductStore} from "@/app/store";
import {FaTrash} from "react-icons/fa";

interface NavigationProps {
    session?: Session | null
}

export default function Navigation({session}: NavigationProps) {
    const products = useCartProduct.use.products();
    const totalProductCount = products.reduce((totalCount, product) => totalCount + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + (Number(product.price) * product.quantity), 0);
    const decrementQuantity = useCartProduct.use.decrementQuantity();
    const incrementQuantity = useCartProduct.use.incrementQuantity();
    const removeCart = useCartProduct.use.removeFromCart();
    const onPayment = async () => {
        const response = await fetch('http://localhost:3000/api/stripe', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stripeCustomerId: session?.user.stripeCustomerId,
                items: products,
                userId: session?.user.id
            })
        })
        const data = await response.json();
        window.location.href = data.url

    }

    return (
        <header
            className="flex h-16 justify-between  items-center px-4 md:px-6 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            <div>
                <Link href="/" prefetch={false}>
                    <Image priority width={100} src={Logo} alt="logo"/>
                </Link>
            </div>
            <nav className="hidden lg:block">
                <NavigationMenu className="flex justify-between">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>@</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-2 lg:w-[300px] w-full">
                                        <Link  legacyBehavior passHref href="/pull">
                                            <NavigationMenuLink
                                                className={`${navigationMenuTriggerStyle()} hover:bg-gray-300 w-[300px]`}>
                                                Pull
                                            </NavigationMenuLink>
                                        </Link>
                                    <Link className="hover:bg-gray-300 block" legacyBehavior passHref href="/tshirt">
                                        <NavigationMenuLink
                                            className={`${navigationMenuTriggerStyle()} hover:bg-gray-300 w-[300px]`}>T-shirt</NavigationMenuLink>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Accessoires</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid p-2 lg:w-[300px]">
                                    <Link className="hover:bg-gray-300" legacyBehavior passHref href="/collier">
                                        <NavigationMenuLink
                                            className={`${navigationMenuTriggerStyle()} hover:bg-gray-300 w-[300px]`}>Collier</NavigationMenuLink>
                                    </Link>
                                    <Link className="hover:bg-gray-300 block" legacyBehavior passHref href="/harnais">
                                        <NavigationMenuLink
                                            className={`${navigationMenuTriggerStyle()} hover:bg-gray-300 w-[300px]`}>Harnais</NavigationMenuLink>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link className="hover:bg-gray-300 " legacyBehavior passHref href="/histoire">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Notre
                                    Histoire</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <section className="flex justify-between space-x-2 items-center">
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {
                                !session?.user ?
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className="p-2 flex items-center justify-center rounded-full hover:bg-secondary"
                                            href="/sign-in"><UserRound/></NavigationMenuLink>
                                    </NavigationMenuItem> :
                                    <DropdownMenu>
                                        <DropdownMenuTrigger><UserRound/></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>
                                                <Link className="bloc w-full" href="/dashboard/settings">Profile</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link className="bloc w-full" href="/dashboard/order">Commande</Link>
                                            </DropdownMenuItem>
                                            {
                                                session.user.role !== "ADMIN" ? undefined : <DropdownMenuItem>
                                                    <Link className="bloc w-full"
                                                          href="/dashboard/admin">Administration</Link>
                                                </DropdownMenuItem>
                                            }
                                            <DropdownMenuItem>
                                                <SignOut/>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                            }

                            <NavigationMenuItem>
                                <Sheet>
                                    <SheetTrigger>
                                        <span
                                            className="p-2 flex items-center justify-center rounded-full  hover:bg-secondary"><ShoppingCart/></span>
                                        <span
                                            className=" text-white absolute top-0 right-0 bg-red-500 rounded-full p-1 text-[11px] flex items-center justify-center h-4 w-4">{totalProductCount}</span>
                                    </SheetTrigger>
                                    {
                                        !session ? (
                                            <SheetContent side="right">
                                                <SheetHeader>
                                                    <SheetTitle className="text-3xl">Veuillez Vous
                                                        connectez</SheetTitle>
                                                    <SheetDescription asChild>
                                                        <Link href="/sign-in">
                                                            Connecter vous !
                                                        </Link>
                                                    </SheetDescription>
                                                </SheetHeader>

                                            </SheetContent>
                                        ) : (
                                            <SheetContent side="right">
                                                <SheetHeader>
                                                    <SheetTitle className="text-3xl">Panier</SheetTitle>
                                                    <SheetDescription>
                                                        Servez vous !
                                                    </SheetDescription>
                                                </SheetHeader>
                                                {
                                                    products.length === 0 ? (
                                                        <span>Le panier est vide.</span>
                                                    ) : products.map((product) => (
                                                        <div className="p-4" key={product.id}>
                                                            <Image width={50} height={50} src={product.image}
                                                                   alt={product.name}/>
                                                            <h3>{product.name}</h3>
                                                            <p><span>Quantité: </span>{product.quantity}</p>
                                                            <p><span>Taille: </span>{product.size}</p>
                                                            <p>Prix: {product.price} €</p>
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    className=" text-white w-6 h-6 mt-2 bg-gray-500 hover:bg-gray-600 p-2 rounded-lg cursor-pointer flex items-center justify-center"
                                                                    onClick={() => decrementQuantity(product.id)}>-
                                                                </button>
                                                                <button
                                                                    className=" text-white w-6 h-6 mt-2 bg-gray-500 hover:bg-gray-600 p-2 rounded-lg cursor-pointer flex items-center justify-center"
                                                                    onClick={() => incrementQuantity(product.id)}>+
                                                                </button>
                                                                <button onClick={() => removeCart(product.id)}
                                                                        className="bg-red-500 text-white  hover:bg-red-600 w-6 h-6 mt-2 p-2 rounded-lg cursor-pointer flex items-center justify-center">
                                                                    <FaTrash/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                <p className="mt-5 text-gray-700 flex items-center gap-2">
                                                    <span>Total : </span><span
                                                    className="font-bold text-2xl">{totalPrice}€</span></p>
                                                <Button onClick={onPayment} disabled={totalPrice === 0}
                                                        className="w-full mt-3" variant="defaultBlack">Paiement</Button>
                                            </SheetContent>
                                        )
                                    }
                                </Sheet>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={"outline"} size="icon">
                                <Menu/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <Collapsible className="grid gap-2 mt-2 ">
                                <CollapsibleTrigger className="hover:bg-secondary px-3 py-2 rounded ">
                              <span>
                                  Vêtement
                              </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <ul className="space-y-3">
                                        <li className="w-full hover:bg-secondary rounded cursor-pointer  px-3 py-2">
                                            <SheetClose asChild>
                                                <Link className="block" href="/pull">Pull</Link>
                                            </SheetClose>
                                        </li>
                                        <li className="hover:bg-secondary rounded cursor-pointer  px-3 py-2">
                                            <SheetClose asChild>
                                                <Link className="block" href="/tshirt">T-shirt</Link>
                                            </SheetClose>
                                        </li>
                                    </ul>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="grid gap-2 mt-2 ">
                                <CollapsibleTrigger className="hover:bg-secondary px-3 py-2 rounded ">
                              <span>
                                  Accessoires
                              </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <ul className="space-y-3">
                                        <li className="hover:bg-secondary rounded cursor-pointer px-3 py-2 w-full">
                                            <SheetClose asChild>
                                                <Link className="block" href="/collier">Collier</Link>
                                            </SheetClose>
                                        </li>
                                        <li className="hover:bg-secondary rounded cursor-pointer  px-3 py-2">
                                            <SheetClose asChild>
                                                <Link className="block" href="/harnais">Harnais</Link>
                                            </SheetClose>
                                        </li>
                                    </ul>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="grid gap-2 mt-2">
                                <CollapsibleTrigger className="hover:bg-secondary px-3 py-2 rounded ">
                                    <SheetClose asChild>
                                        <Link className="hover:bg-secondary rounded px-3 py-2" href="/histoire"
                                        >Notre histoire
                                        </Link>
                                    </SheetClose>
                                </CollapsibleTrigger>
                            </Collapsible>
                            <Collapsible className="grid gap-2 mt-2">
                                <CollapsibleTrigger className="hover:bg-secondary px-3 py-2 rounded ">
                                    <SheetClose asChild>
                                        <Link className="hover:bg-secondary rounded px-3 py-2" href="/dashboard/settings"
                                        >Parametres
                                        </Link>
                                    </SheetClose>
                                </CollapsibleTrigger>
                            </Collapsible>
                            <Collapsible className="grid gap-2 mt-2">
                                <CollapsibleTrigger className="hover:bg-secondary px-3 py-2 rounded ">
                                    <SheetClose asChild>
                                        <Link className="hover:bg-secondary rounded px-3 py-2" href="/dashboard/order"
                                        >Commandes
                                        </Link>
                                    </SheetClose>
                                </CollapsibleTrigger>
                            </Collapsible>
                            {
                                session?.user?.role === "ADMIN" && (
                                    <Collapsible className="grid gap-2 mt-2">
                                        <CollapsibleTrigger className="hover:bg-secondary px-3 py-2 rounded">
                                            <SheetClose asChild>
                                                <Link className="hover:bg-secondary rounded px-3 py-2" href="/dashboard/admin">
                                                    Administration
                                                </Link>
                                            </SheetClose>
                                        </CollapsibleTrigger>
                                    </Collapsible>
                                )
                            }
                        </SheetContent>
                    </Sheet>
                </div>
            </section>
        </header>
    )
}

