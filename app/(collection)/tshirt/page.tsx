import TshirtPage from "@/app/(collection)/tshirt/TshirtPage";
import type {Metadata} from "next";



export const metadata: Metadata = {
    title: "T-shirt pour chien | Petitepattestyle",
    description: "T-shirt pour chien de petite taille"
};

export default function Page() {
    return (
        < TshirtPage />
    )
}
