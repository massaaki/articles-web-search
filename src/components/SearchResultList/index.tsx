import { useContext } from "react";

import { ArticleContext } from "context/articleContext";

import { ArticleList } from "components/ArticleList"
import { Spinner } from 'components/Spinner';

import * as S from './styles';

export const SearchResultList = () => {
	const { articlesResult } = useContext(ArticleContext);

	const { loading } = useContext(ArticleContext);

	if (loading)
		return (
			<S.Loading>
				<Spinner />
			</S.Loading>
		)
	return (
		<>
			{articlesResult && (<ArticleList articles={articlesResult} />)}
		</>
	)
}
