import { Article } from 'interfaces/article';
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

enum StorageKey {
	CURRENT_ARTICLE = 'ARTICLES_CLOUD_CURRENT_ARTICLE',
	ARTICLES = 'ARTICLES_CLOUD_ARTICLES'
}

export type ArticleContextType = {
	currentArticle: Article;
	articlesResult: Article[];
	updateCurrentArticle: (article: Article) => void;
	updateArticlesResult: (articles: Article[]) => void;
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

export const ArticleContext = createContext({} as ArticleContextType);

type ArticleProviderProps = {
	children: JSX.Element;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
	const [currentArticle, setCurrentArticle] = useState<Article>({} as Article);
	const [articlesResult, setArticlesResult] = useState<Article[]>([]);
	const [loading, setLoading] = useState(false);

	const updateCurrentArticle = (newArticle: Article) => {

		const articleStr = JSON.stringify(newArticle);
		localStorage.setItem(StorageKey.CURRENT_ARTICLE, articleStr);

		setCurrentArticle(newArticle);
	}

	const updateArticlesResult = (newArticles: Article[]) => {
		const articlesStr = JSON.stringify(newArticles);
		localStorage.setItem(StorageKey.ARTICLES, articlesStr);

		setArticlesResult(newArticles);
	}

	useEffect(() => {

		const articleStr = localStorage.getItem(StorageKey.CURRENT_ARTICLE);
		if (articleStr) {
			const article = JSON.parse(articleStr);
			setCurrentArticle(article);
		}

		const articlesStr = localStorage.getItem(StorageKey.ARTICLES);
		if (articlesStr) {
			const articles = JSON.parse(articlesStr);
			setArticlesResult(articles);
		}
		return (() => {
			setArticlesResult([]);
			setCurrentArticle({} as Article);
		})

	},[])


	return (
		<ArticleContext.Provider
			value={{
				currentArticle,
				updateCurrentArticle,
				articlesResult,
				updateArticlesResult,
				loading,
				setLoading
			}}
		>
			{children}
		</ArticleContext.Provider>
	)
}
