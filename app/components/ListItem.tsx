import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4">
            <Link className="text-white/90 border-2 border-amber-900/90 lg:border-amber-900/25 hover:border-amber-900/75 rounded-md p-2 mt-4 text-xl dark:lg:text-white/40 first:hover:text-white/90" href={`/posts/${id}`}>
            <span> {title} </span>
            <span className="text-sm"> {formattedDate} </span>
            {/* <p className="text-sm mt-1"></p> */}
            </Link>
        </li>
    )
}