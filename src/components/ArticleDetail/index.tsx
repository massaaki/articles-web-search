
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { ArticleContext } from "context/articleContext";
import { TagCloud } from 'react-tagcloud';
import { CountAndRemoveDuplicatedString } from "utils/count-and-remove-text-array";

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
		<>
			<h2>Article Detail</h2>
			<p>{currentArticle.title}</p>
			<div style={{'maxWidth': '500px'}}>
			<TagCloud
				minSize={12}
				maxSize={35}
				tags={tagsData}
				/>
			</div>

			<Link href='/'>
				<a>
					Back to home
				</a>
			</Link>
		</>
	)
}
