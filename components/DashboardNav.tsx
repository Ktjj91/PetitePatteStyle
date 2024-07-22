import { Settings } from 'lucide-react';
import Link from "next/link";
import {signOut} from "@/auth";
import { Shield } from 'lucide-react';

export default function DashboardNav() {
    const menuDashBoard = [
        {name: "Parametres", icon:<Settings />, path: "/dashboard/settings",role:"USER"},
        {name: "Administration", icon:<Shield />, path: "/dashboard/admin",role:"USER"}

    ]

    return (
        <nav className="p-2">
            <ul className="mb-4">
                {menuDashBoard.map((item) => (
                    <li key={item.name}
                        className="flex items-center gap-2 p-3 hover:bg-gray-300 rounded-md"
                    >
                        {item.icon}
                        <Link href={item.path}>{item.name}</Link>
                    </li>
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
