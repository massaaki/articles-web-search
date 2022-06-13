
import { ArticleItem } from 'components/ArticleItem';
import { Article } from 'interfaces/article';

import { article } from '../ArticleItem/mock';


import * as S from './styles';

export type ArticleListProps = {
	articles: Article[];
}


export const ArticleList = ({articles}: ArticleListProps) => {
	return (
		<S.Wrapper>
			{articles.map(article => (
				<ArticleItem key={article.id} article={article} link="#" />
			))}
		</S.Wrapper>
	)
}
