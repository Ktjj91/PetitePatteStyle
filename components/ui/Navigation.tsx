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
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Collapsible, CollapsibleTrigger, CollapsibleContent} from "@/components/ui/collapsible";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {signOut} from "@/auth";
import {SignOut} from "@/components/ui/SignOut";

export default  function Navigation() {


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
                            <NavigationMenuTrigger>Vêtements</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-2 lg:w-[300px]">
                                    <Link  legacyBehavior passHref href="/pull">
                                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-gray-300 w-[300px]`}>
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
                            <DropdownMenu>
                              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link className="bloc w-full" href="/dashboard/settings">Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <SignOut />
                                    </DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="p-2 flex items-center justify-center rounded-full  hover:bg-secondary  "
                                    href="/sign-in"><UserRound/></NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Sheet>
                                    <SheetTrigger>
                                        <span
                                            className="p-2 flex items-center justify-center rounded-full  hover:bg-secondary"><ShoppingCart/></span>
                                        <span
                                            className=" text-white absolute top-0 right-0 bg-red-500 rounded-full p-1 text-[11px] flex items-center justify-center h-4 w-4">0</span>
                                    </SheetTrigger>
                                    <SheetContent side="right">

                                    </SheetContent>
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
                                  Vêtements
                              </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <ul className="space-y-3">
                                        <li className=" w-full hover:bg-secondary rounded cursor-pointer  px-3 py-2">
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
                                    <Link className="hover:bg-secondary rounded px-3 py-2" href="/histoire">Notre
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

