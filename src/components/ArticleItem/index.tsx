
import { Article } from 'interfaces/article';

import * as S from './styles';

export type ArticleItemProps = {
	article: Article
}

export const ArticleItem = ({ article }: ArticleItemProps) => {

	return (
		<S.Wrapper>
			<S.Content>
				<img src={article.image.url}/>
				<div dangerouslySetInnerHTML={{ __html: article.snippet }}></div>
			</S.Content>
		</S.Wrapper>
	)
}
