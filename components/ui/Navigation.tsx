"use client"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent,navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Logo from "../../public/petitepattestyle.png"
import Image from "next/image";
import {UserRound,ShoppingCart,Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Collapsible, CollapsibleTrigger,CollapsibleContent} from "@/components/ui/collapsible";





export default function Navigation() {
    return (
        <header className="flex h-16 justify-between  items-center px-4 md:px-6 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            <div >
                <Link href="/" prefetch={false}>
                    <Image  priority width={100} src={Logo} alt="logo"/>
                </Link>
            </div>
            <nav className="flex items-center  hidden lg:block">
                <NavigationMenu className="flex justify-between">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Vêtements</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid p-2">
                                    <Link className="hover:bg-gray-300" legacyBehavior passHref href="/">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pull</NavigationMenuLink>
                                    </Link>
                                    <Link className="hover:bg-gray-300" legacyBehavior passHref href="/">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>T-shirt</NavigationMenuLink>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Accessoires</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid p-2">
                                    <Link  className="hover:bg-gray-300 " legacyBehavior passHref href="/">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Collier</NavigationMenuLink>
                                    </Link>
                                    <Link className="hover:bg-gray-300" legacyBehavior passHref href="/">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Harnais</NavigationMenuLink>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link  className="hover:bg-gray-300 " legacyBehavior passHref href="/">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Notre Histoire</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <section className="flex justify-between space-x-2 items-center">
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="p-2 flex items-center justify-center rounded-full  hover:bg-secondary  "
                                    href="/sign-in"><UserRound/></NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="p-2 flex items-center justify-center rounded-full  hover:bg-secondary  " href="/"><ShoppingCart/></NavigationMenuLink>
                                <span
                                    className=" text-white absolute top-0 right-0 bg-red-500 rounded-full p-1 text-[11px] flex items-center justify-center h-4 w-4">0</span>
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
                                  Vêtements
                              </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <ul className="space-y-3">
                                        <li className="hover:bg-secondary rounded cursor-pointer  px-3 py-2">
                                            <Link href="/">Pull</Link>
                                        </li>
                                        <li className="hover:bg-secondary rounded cursor-pointer  px-3 py-2">
                                            <Link href="/">T-shirt</Link>

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
                                        <li className="hover:bg-secondary rounded cursor-pointer  px-3 py-2">
                                            <Link href="/">Collier</Link>
                                        </li>
                                        <li className="hover:bg-secondary rounded cursor-pointer  px-3 py-2">
                                            <Link href="/">Harnais</Link>

                                        </li>
                                    </ul>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="grid gap-2 mt-2">
                                <CollapsibleTrigger className="hover:bg-secondary px-3 py-2 rounded ">
                                    <Link className="hover:bg-secondary rounded px-3 py-2" href="/">Notre
                                        histoire</Link>
                                </CollapsibleTrigger>
                            </Collapsible>
                        </SheetContent>
                    </Sheet>
                </div>
            </section>

        </header>
    )
}

