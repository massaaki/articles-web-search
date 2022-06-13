import React, { useEffect, useMemo, useState, useRef, useContext } from 'react';
import debounce from 'lodash.debounce';

import { api } from 'api/v1';

import { Article } from 'interfaces/article';
import { ArticleContext } from 'context/articleContext';

import * as S from './styles';

export type ArticleResponse = {
	data: {
		value: Article[]
	}
}

export type RecommendedTerms = {
	data: string[]
}

export const Search = () => {
	const [termToSearch, setTermToSearch] = useState('');
	const [recommendedTerms, setRecommendedTerms] = useState<string[]>([]);
	const inputSearchRef = useRef<HTMLInputElement>(null);
	const { updateArticlesResult, setLoading } = useContext(ArticleContext);
	const [pageNumber,] = useState(1);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTermToSearch(e.target.value);
		if (e.target.value && e.target.value.length >= 3)
			fetchAutocomplete(e.target.value);
	}

	const debounceSearchResults = useMemo(() => {
		return debounce(handleChange, 500);
	}, []);

	const fetchAutocomplete = async (text: string) => {
		let response: RecommendedTerms;

		if (process.env.NODE_ENV === 'development') {
			response = await api.get(`/fake-autocomplete?text=${text}`);
		} else {
			response = await api.get(`/autocomplete?text=${text}`);
		}

		setRecommendedTerms(response.data);
	}

	const fetchArticles = async () => {
		setLoading(true);
		let response: ArticleResponse;

		if (process.env.NODE_ENV === 'development') {
			response = await api.get(`/fake-articles?search=${termToSearch}&pageNumber=${pageNumber}`);
		} else {
			response = await api.get(`/articles?search=${termToSearch}&pageNumber=${pageNumber}`);
		}

		updateArticlesResult(response.data.value);
		debounceSearchResults.cancel();
		setRecommendedTerms([]);

		setLoading(false);
	}

	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		fetchArticles();
	}

	const handleRecommendedItem = (term: string) => {
		setTermToSearch(term);
		if(inputSearchRef.current)
			inputSearchRef.current.value = term;
		setRecommendedTerms([]);
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
		<S.Wrapper>
			<S.Content>
				<S.Search>
					<input ref={inputSearchRef} type="text" onChange={debounceSearchResults} placeholder="Search for some term"/>
					<button onClick={(e) => handleSearch(e)}>Search</button>
				</S.Search>
				{recommendedTerms && recommendedTerms.length > 0 && (
					<S.Recommendations>
						<ul>
							{recommendedTerms.map(term => <li key={term} onClick={() => handleRecommendedItem(term)}>{term}</li>)}
						</ul>
					</S.Recommendations>
				)}
			</S.Content>
		</S.Wrapper>
	)
}
