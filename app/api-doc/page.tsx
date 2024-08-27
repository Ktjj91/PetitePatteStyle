import { getApiDocs } from "@/lib/swagger";
import ReactSwagger from "./react-swagger";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function IndexPage() {
    const session = await auth();

    if(session?.user.role !== "ADMIN") return redirect("/")

    const spec = await getApiDocs();
    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    );
}