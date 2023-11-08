import { url } from "inspector"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"

export default function Navbar() {
    return (
        <nav id="nav" className="bg-amber-900 p-4 sticky top-0 drop-shadow-xl z-10 bg-opacity-20  blur-backdrop">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-2xl sm:text-lg font-bold dark:text-white grid place-content-center mb-0">
                    <Link href="/" className="text-black/80 hover:text-black dark:text-white/90 no-underline dark:hover:text-white">In Limbo</Link>
                </h1>
                <div className="hidden sm:flex flex-row justify-center sm:justify-evenly align-middle gap-4 items-center text-white text-base">
                    <Link className="text-black/80 hover:text-black dark:text-white/90 no-underline dark:hover:text-white" href="https://github.com/Kaiyulul">
                        <FiGithub />
                    </Link>
                </div>
            </div>
        </nav>
    )
}