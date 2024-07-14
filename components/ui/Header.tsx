import {ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <header className="w-full h-screen bg-cover bg-center"
                style={{backgroundImage: "url('bichon.jpg')"}}>
            <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col">
                <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">PetitePatteStyle</h1>
                <p className="text-white mt-3 font-bold m-2 text-center text-[12px] md:text-[14px] lg:text-[16px]">Le
                    style parfait pour les petits chiens - Découvrez petitePatteStyle !</p>
                <a href="#galerie"
                   className="text-white text-4xl cursor-pointer  transition-all">
                   <Button variant="defaultBlack">Voir nos produits</Button>
                </a>
            </div>
        </header>
    )
}

