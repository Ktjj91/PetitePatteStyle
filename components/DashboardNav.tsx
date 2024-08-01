import { Settings } from 'lucide-react';
import Link from "next/link";
import {auth, signOut} from "@/auth";
import { Shield } from 'lucide-react';

export default async function DashboardNav() {
    const session = await auth();
    const userRole = session?.user.role;
    const menuDashBoard = [
        {name: "Parametres", icon:<Settings />, path: "/dashboard/settings",role:"USER"},
        {name: "Administration", icon:<Shield />, path: "/dashboard/admin",role:"ADMIN"}

    ]

    const filteredMenu = menuDashBoard.filter(item => {
        return item.role === "USER" || (item.role === "ADMIN" && userRole === "ADMIN");
    });

    return (
        <nav className="p-2">
            <ul className="mb-4">
                {filteredMenu.map((item) => (
                    <Link key={item.name} href={item.path}>
                    <li
                        className="flex items-center gap-2 p-3 hover:bg-gray-300 rounded-md"
                    >
                        {item.icon}
                        {item.name}
                    </li>
                    </Link>
                ))}
                <li>
                    <form
                        action={async () => {
                            "use server"
                            await signOut({redirectTo:"/"});
                        }}
                    >
                        <button className="  bg-red-500 hover:bg-red-600 text-white  rounded-md p-2 w-full" type="submit">Déconnexion</button>
                    </form>
                </li>

            </ul>
        </nav>
    )
}
