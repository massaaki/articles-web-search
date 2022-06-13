import React, { useEffect, useMemo, useState, useRef } from 'react';
import debounce from 'lodash.debounce';

import { api } from 'api/v1';
import { Article } from 'interfaces/article';

import { ArticleList } from 'components/ArticleList';

export type ArticleResponse = {
	data:  {
		value: Article[]
	}
}

export type RecommendedTerms = {
	data: string[]
}


export const Search = () => {
	const [termToSearch, setTermToSearch] = useState('');
	const [articles, setArticles] = useState<Article[]>();
	const [recommendedTerms, setRecommendedTerms] = useState<string[]>([]);
	const inputSearchRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTermToSearch(e.target.value);
		if (e.target.value)
			fetchAutocomplete();
	}

	const debounceSearchResults = useMemo(() => {
		return debounce(handleChange, 500);
	}, []);

	const fetchAutocomplete = async () => {
		const response: RecommendedTerms = await api.get('/autocomplete?text=asd');
		setRecommendedTerms(response.data);
	}

	const fetch = async () => {
		const response: ArticleResponse = await api.get('/articles?search=asd');
		setArticles(response.data.value);
	}

	useEffect(() => {
		return () => {
			if (debounceSearchResults)
				debounceSearchResults.cancel();
		}
	})

	useEffect(() => {
		if (!termToSearch) {
			setRecommendedTerms([]);
		}
	}, [termToSearch])



	return (
		<>
			<div>
				<input ref={inputSearchRef} type="text" onChange={debounceSearchResults} />
				<button onClick={() => fetch()}>Search</button>
				{recommendedTerms && (
					<ul>
						{recommendedTerms.map(term => <li key={term}>{term}</li>)}
					</ul>
				)}

			</div>
			{articles && (<ArticleList articles={articles}/>)}
		</>
	)
}
