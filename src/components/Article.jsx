import { ArticlePost } from "./ArticlePost"

export function Article({ articles }) {
    return(
        <div>
            {articles.map((article, index) => {
                return (
                    <ArticlePost
                    key={index}
                    article={article}
                    />
                )
            })

            }
        </div>
    )
};