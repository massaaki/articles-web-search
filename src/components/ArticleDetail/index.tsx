
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { ArticleContext } from "context/articleContext";
import { TagCloud } from 'react-tagcloud';
import { CountAndRemoveDuplicatedString } from "utils/count-and-remove-text-array";

import * as S from './styles';

type TagsType = {
	value: string;
	count: number;
}

export const ArticleDetail = () => {
	const { currentArticle } = useContext(ArticleContext);
	const [tagsData, setTagsData] = useState<TagsType[]>([])

	useEffect(() => {
		if (currentArticle.body) {
			setTagsData(CountAndRemoveDuplicatedString(currentArticle.body));
		}


	}, [currentArticle]);

	if (!currentArticle)
		return <>Loading</>;

	return (
		<S.Wrapper>
			<S.Header>
				{currentArticle.image && (
					<S.Thumb src={`${currentArticle.image?.url || ''}`} />
					)}
			</S.Header>

			<S.Container>
				<S.Title>{currentArticle.title}</S.Title>

				<S.Body dangerouslySetInnerHTML={{ __html: currentArticle.body }} />



				<S.TagsCloud>
					<h3>Most usage terms</h3>
					<TagCloud
						minSize={12}
						maxSize={35}
						tags={tagsData}
						/>
				</S.TagsCloud>
			</S.Container>


		</S.Wrapper>
	)
}
