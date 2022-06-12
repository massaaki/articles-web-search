
import { Article } from 'interfaces/article';

import * as S from './styles';

export type ArticleItemProps = {
	article: Article
}

export const ArticleItem = ({article}: ArticleItemProps) => {
	return (
		<S.Wrapper>
			<div dangerouslySetInnerHTML={{ __html: article.body }}></div>
		</S.Wrapper>
	)
}
