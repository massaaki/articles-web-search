
import Link from "next/link";
import { useContext } from "react";

import { ArticleContext } from "context/articleContext";
import { TagCloud } from 'react-tagcloud';

import { article } from "components/ArticleItem/mock";


const data = [
	{ value: 'JavaScript', count: 38 },
	{ value: 'React', count: 30 },
	{ value: 'Nodejs', count: 28 },
	{ value: 'Express.js', count: 25 },
	{ value: 'HTML5', count: 33 },
	{ value: 'MongoDB', count: 18 },
	{ value: 'CSS3', count: 20 },
]

export const ArticleDetail = () => {
	const { currentArticle } = useContext(ArticleContext);

	if (!currentArticle)
		return <>Loading</>;

	return (
		<>
			<h2>Article Detail</h2>
			<p>{article.snippet}</p>
			<div style={{'maxWidth': '500px'}}>
			<TagCloud
				minSize={12}
				maxSize={35}
				tags={data}
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
