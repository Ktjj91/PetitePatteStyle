
import Link from "next/link";
import Image from "next/image";

export default function Collection() {
    return (
        <section className=" mt-3 grid grid-cols-1 md:grid-cols-2 w-full mx-auto max-w-[1000px] gap-3">
            <Link href="/pull" >
                <div className='max-w-[500px] p-3 border shadow-md flex items-center justify-center w-full flex-col hover:translate-y-[10px] transition-all '>
                    <Image width={300} height={300} src='/bichon-pull.jpeg' alt="bichon avec un harnais" className="rounded-sm" ></Image>
                    <p className='text-4xl font-bold'>Pull</p>
                </div>
            </Link>
            <Link href="/tshirt">
                <div className='max-w-[500px] p-3 border shadow-md flex items-center justify-center w-full flex-col hover:translate-y-[10px] transition-all'>
                    <Image width={300} height={300} src='/bichon-tshirt.jpeg' alt="bichon avec un harnais"  className="rounded-sm" ></Image>
                    <p className='text-4xl font-bold'>T-shirt</p>
                </div>
            </Link>
            <Link href="/harnais">
                <div className='max-w-[500px] p-3 border shadow-md flex items-center justify-center w-full flex-col hover:translate-y-[10px] transition-all'>
                    <Image width={300} height={300} src='/bichon-harnais.jpeg' alt="bichon avec un harnais"  className="rounded-sm" ></Image>
                    <p className='text-4xl font-bold'>Harnais</p>
                </div>
            </Link>
            <Link href="/pull">
                <div className=' max-w-[500px]  p-3 border shadow-md flex items-center justify-center w-full flex-col hover:translate-y-[10px] transition-all'>
                    <Image width={300} height={300} src='/bichon-collier.jpeg' alt="bichon avec un harnais"  className="rounded-sm" ></Image>
                    <p className='text-4xl font-bold'>Pull</p>
                </div>
            </Link>

        </section>
    )
}
