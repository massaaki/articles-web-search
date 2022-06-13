
import { Article } from 'interfaces/article';
import { truncateText } from 'utils/truncate-text';

import * as S from './styles';

export type ArticleItemProps = {
	article: Article
	link: string
}

export const ArticleItem = ({ article, link }: ArticleItemProps) => {
	return (
		<S.Wrapper>
			<S.Content style={{ background: `url(${article.image.url})` }}>
				<S.Overlay>
					<S.Title dangerouslySetInnerHTML={{ __html: truncateText(article.snippet, 120) }}></S.Title>
				</S.Overlay>
			</S.Content>
		</S.Wrapper>
	)
}
