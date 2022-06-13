import { article } from "components/ArticleItem/mock";
import { ArticleContext } from "context/articleContext";
import Link from "next/link";
import { useContext } from "react";

export const ArticleDetail = () => {
	const { currentArticle } = useContext(ArticleContext);

	if (!currentArticle)
		return <>Loading</>;

	return (
		<>
			<h2>Article Detail</h2>
			<p>{article.snippet}</p>

			<Link href='/'>
				<a>
					Back to home
				</a>
			</Link>
		</>
	)
}
