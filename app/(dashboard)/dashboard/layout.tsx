import DashboardNav from "@/components/DashboardNav";
import {Button} from "@/components/ui/button";

export default function DashboardLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <section className="w-full mt-2 p-2 flex">
            <div className=" w-2/12 h-screen border-r border-r-300">
                <DashboardNav/>
            </div>
            <div className="w-full">
                {children}
            </div>

        </section>
    )

}