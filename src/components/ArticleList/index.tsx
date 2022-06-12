
import { ArticleItem } from 'components/ArticleItem';

import { article } from '../ArticleItem/mock';


import * as S from './styles';

export const ArticleList = () => {
	return (
		<S.Wrapper>
			<ArticleItem article={article}/>
			<ArticleItem article={article}/>
			<ArticleItem article={article}/>
		</S.Wrapper>
	)
}
