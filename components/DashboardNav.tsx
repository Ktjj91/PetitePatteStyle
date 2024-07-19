import { Settings } from 'lucide-react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {SignOut} from "@/components/ui/SignOut";

export default function DashboardNav() {

    const menuDashBoard = [
        {name: "Parametres", icon:<Settings />, path: "/dashboard/settings"}

    ]

    return (
        <nav className="p-2">
            <ul className="mb-4">
                {menuDashBoard.map((item) => (
                    <li key={item.name}
                        className="flex items-center gap-2 p-3  hover:bg-gray-300  rounded-md"
                    >
                        {item.icon}
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
                <li>
                    <SignOut />
                </li>

            </ul>
        </nav>
    )
}
