import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="px-2">
            <Link className="text-white/90 border-2 border-amber-900/90 lg:border-amber-900/25 hover:border-amber-900/75 rounded-md p-2 mt-4 text-base dark:lg:text-white/40 first:hover:text-white/90 flex flex-col" href={`/posts/${id}`}>
            <span className="font-bold"> {title} </span>
            <span className="italic text-sm p-1"> {formattedDate} </span>
            {/* <p className="text-sm mt-1"></p> */}
            </Link>
        </li>
    )
}