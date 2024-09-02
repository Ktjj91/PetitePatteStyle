import Logo from "@/public/petitepattestyle.png"
import Image from "next/image";
import instagramLogo from "@/public/instagram.png"
import Link from "next/link"

export default function Footer() {
    return (
        <footer
            className="mt-auto h-full w-full bg-secondary flex flex-col justify-between  px-2 md:flex-row h-48 ">
            <section className="md:order-none flex m-2 flex-col items-center justify-center  ">
                <div>
                    <Link href="/">
                        <Image width={100} src={Logo} alt="logo"/>
                    </Link>
                </div>
            </section>
            <section className="text-sm m-2 flex flex-col items-center">
                <h3 className="font-bold">Navigation</h3>
                <ul className="flex flex-col items-center">
                    <li className="hover:underline">
                        <Link href="/histoire">
                            Notre histoire
                        </Link>
                    </li>
                    <li>
                    </li>
                    <li>
                        <Link className="hover:underline" href="/pull">
                            Pull
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/tshirt">
                            T-shirt
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/collier">
                            Collier
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/harnais">
                            Harnais
                        </Link>
                    </li>
                    <li>
                        <a className="text-black font-bold hover:underline" href="https://amzn.to/477OR7m">Amazon Associate</a>
                    </li>
                </ul>
            </section>
            <section className="text-sm m-2 flex flex-col items-center">
                <h2 className="font-bold">Informations</h2>
                <ul className=" flex flex-col items-center">
                    <li className="hover:underline">
                        <Link href="/politique">Politique de confidentialité & cookies</Link>
                    </li>
                    <li><Link className="hover:underline" href="/cgv">Conditions Générales</Link></li>
                    <li><Link className="hover:underline" href="/contact">Contactez-nous</Link></li>
                    <li><Link className="hover:underline" href="/mt">Mention légale</Link></li>
                    <li><Link className="hover:underline" href="/cgu">CGU</Link></li>
                    <li><Link className="hover:underline" href="/cgv">CGV</Link></li>
                </ul>

            </section>
            <section className="text-sm m-2">
                <h2 className="font-bold text-center">Réseaux sociaux</h2>
                <Link href="https://www.instagram.com/petitepattestyle/">
                    <Image className=" mx-auto mt-2" width={18} src={instagramLogo} alt="logo instagram"/>
                </Link>
            </section>
        </footer>
    )
}
