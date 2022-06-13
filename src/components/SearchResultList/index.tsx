import { useContext } from "react";

import { ArticleContext } from "context/articleContext";

import { ArticleList } from "components/ArticleList"

export const SearchResultList = () => {
	const { articlesResult } = useContext(ArticleContext);
	return (
		<>
			{articlesResult && (<ArticleList articles={articlesResult} />)}
		</>
	)
}
