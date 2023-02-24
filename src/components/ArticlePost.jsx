import { Link } from "react-router-dom";

export function ArticlePost({ article }) {
    return(
        <div className="border-b-4">
            <h3 className="text-6xl my-10">
                {article.date}
            </h3>
            <h2 className="text-8xl my-10 text-black ">
                {article.title}
            </h2>
            <img src={article.src} alt={article.title} className="image my-10" />
            <p className="subhead text-4xl py-4">
                {article.body}
            </p>
            <h2 className="flex justify-end text-4xl my-10">
                <Link className=" text-red-600">Continue ...</Link>
            </h2>
        </div>
    )
}