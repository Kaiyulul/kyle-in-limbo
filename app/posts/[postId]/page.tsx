import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"


import Navbar from '../../components/Navbar'

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <body className="dark:bg-stone-900">
            <Navbar/>
            <main className="px-10 prose prose-xl prose-slate dark:prose-invert mx-auto">
                <h1 className="text-center text-3xl mt-8 mb-0">{title}</h1>
                <p className="text-center mt-0">{pubDate}</p>
                <article>
                    <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    <p>
                        <Link href="/" className="no-underline"> ← </Link>
                    </p>
                </article>
            </main>
        </body>
    )
}