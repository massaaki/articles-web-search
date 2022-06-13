import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import { api } from 'api/v1';
import { Article } from 'interfaces/article';
import { ArticleList } from 'components/ArticleList';


export type ArticleResponse = {
	data:  {
		value: Article[]
	}
}


export const Search = () => {
	const [termToSearch, setTermToSearch] = useState('');
	const [articles, setArticles] = useState<Article[]>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('recommended items');
		setTermToSearch(e.target.value);
	}

	const debounceSearchResults = useMemo(() => {
		return debounce(handleChange, 500);
	}, []);


	const fetch = async () => {
		const response: ArticleResponse = await api.get('/articles?search=asd');
		setArticles(response.data.value);
	}

	useEffect(() => {
		return () => {
			debounceSearchResults.cancel();
		}
	})

	useEffect(() => {
		console.log(articles);
	}, [articles])



	return (
		<>
			<div>
				<input type="text" onChange={debounceSearchResults} />
				<button onClick={() => fetch()}>Search</button>
			</div>
			{articles && (<ArticleList articles={articles}/>)}
		</>
	)
}
