import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto">
      <p className="mt-12 mb-12 text-4xl text-center dark:text-white">
        {"Hello World! I'm Kyle."} <br/>
      </p>
      <p className="mt-12 mb-12 text-4xl text-center dark:text-white">
        {"Welcome to my post-graduate mind."} <br/>
      </p>
      <Posts />
    </main>
  )
}
