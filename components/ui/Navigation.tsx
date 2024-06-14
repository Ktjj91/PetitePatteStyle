"use client"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent,navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Logo from "../../public/PAtePetiteStyle__3_-removebg-preview.png"
import Image from "next/image";
import {UserRound,ShoppingCart,Menu,ChevronRightIcon} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Collapsible, CollapsibleTrigger,CollapsibleContent} from "@/components/ui/collapsible";





export default function Navigation() {
    return (
        <header className="flex h-16 justify-between  items-center px-4 md:px-6 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-center ">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image  priority width={100} src={Logo} alt="logo"/>
                </Link>
            </div>
            <nav className="flex items-center  hidden lg:block">
                <NavigationMenu className="flex justify-between">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Vêtements</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[200px] p-2">
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
                                <div className="grid w-[200px] p-2">
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
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/"><UserRound /></NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/"><ShoppingCart /></NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button  variant={"outline"} size="icon">
                            <Menu  />
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
                                <Link className="hover:bg-secondary rounded px-3 py-2" href="/">Notre histoire</Link>
                            </CollapsibleTrigger>
                        </Collapsible>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

