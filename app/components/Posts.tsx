import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="text-center py-6 mx-auto max-w-2xl border-t border-white/20">
            <h2 className="text-xl font-bold dark:text-white/90">
                {"My latest brain farts"}
            </h2>
            <ul className="">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}