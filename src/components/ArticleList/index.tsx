
import { Article } from 'interfaces/article';

import { ArticleItem } from 'components/ArticleItem';

import * as S from './styles';

export type ArticleListProps = {
	articles: Article[];
}


export const ArticleList = ({ articles }: ArticleListProps) => {
	return (
		<S.Wrapper>
			{articles.map(article => (
				<ArticleItem key={article.id} article={article} />
			))}
		</S.Wrapper>
	)
}
