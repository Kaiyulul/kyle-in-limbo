import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <main className="px-10 prose prose-xl dark:prose-invert mx-auto">
            <h1 className="mt-12"> {"Looks like someone's lost."} </h1>
            <Link href="/" className="no-underline">
                <Image 
                    src="/images/pixelSphereCut.png" 
                    width={300} height={300} alt="Kyle Tandoc"
                    className="m-auto mt-12 mb-12">
                </Image>
            </Link>
            <h2 className="mt-12 text-right text-2xl text-white/10"> {"(Press the marble)"} </h2>
        </main>
    )
}