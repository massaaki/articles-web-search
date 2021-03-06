import { useContext } from 'react';
import Link from 'next/link';

import {ArticleContext} from 'context/articleContext';

import { Article } from 'interfaces/article';
import { truncateText } from 'utils/truncate-text';

import * as S from './styles';

export type ArticleItemProps = {
	article: Article
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
	const { updateCurrentArticle } = useContext(ArticleContext);
	return (
		<S.Wrapper>
			<Link href={`/article`} >
				<a onClick={() => { updateCurrentArticle(article) }}>
					<S.Content style={{ background: `url(${article.image.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
						<S.Overlay>
							<S.Title dangerouslySetInnerHTML={{ __html: truncateText(article.title, 300) }}></S.Title>
						</S.Overlay>
					</S.Content>
				</a>
			</Link>
		</S.Wrapper>
	)
}
