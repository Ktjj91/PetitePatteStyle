    import  Logo from "@/public/petitepattestyle.png"
    import Image from "next/image";
    import instagramLogo from "@/public/instagram.png"
    import Link from "next/link"

    export default function Footer() {
        return (
            <footer className="mt-auto h-48 w-full bg-red-500 bg-secondary flex justify-between">
                <section className=" order-last md:order-none flex m-2 flex-col items-center justify-center">
                    <div>
                        <Link href="/">
                            <Image width={100} src={Logo} alt="logo"/>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image width={18} src={instagramLogo} alt="logo instagram"/>
                        </Link>
                    </div>
                </section>
                <section className="text-sm m-2">
                    <h3 className="font-bold">Navigation</h3>
                    <ul>
                        <li className="hover:underline">
                            <Link href="/">
                                Notre histoire
                            </Link>
                        </li>
                        <li>
                        </li>
                        <li>
                            <Link className="hover:underline" href="/">
                                Pull
                            </Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/">
                                T-shirt
                            </Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/">
                                Collier
                            </Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/">
                                Harnais
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="text-sm m-2">
                    <h2 className="font-bold">Informations</h2>
                    <ul>
                        <li className="hover:underline">
                            <Link href="/">Politique de confidentialité & cookies</Link>
                        </li>
                        <li><Link className="hover:underline" href="/">Conditions Générales</Link></li>
                        <li><Link className="hover:underline" href="/">Gérer les cookies</Link></li>
                    </ul>
                </section>
            </footer>
        )
    }
