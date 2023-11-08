import Posts from "./components/Posts"
import Image from "next/image"

export default function Home() {
  return (
    <main className="p-6 md:p-0 max-w-3xl mx-auto">
      <Image 
        src="/images/pixelSphereCut.png" 
        width={200} height={200} alt="Kyle Tandoc"
        className="m-auto mt-12 mb-12">
      </Image>
      <h1 className="font-bold text-4xl text-center dark:text-white">
        {'In Limbo'}
      </h1>
      <p className="mt-4 mb-8 text-base text-center dark:text-white/80">
        {'Personal space to share my'} <br/> {'thoughts and brain farts'}
      </p>
      <Posts />
    </main>
  )
}
