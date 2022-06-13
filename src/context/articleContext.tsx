import { Article } from 'interfaces/article';
import { createContext, useState } from 'react';



export type ArticleContextType = {
	currentArticle: Article;
	articlesResult: Article[];
	updateCurrentArticle: (article: Article) => void;
	updateArticlesResult: (articles: Article[]) => void;
}

export const ArticleContext = createContext({} as ArticleContextType);

type ArticleProviderProps = {
	children: JSX.Element;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
	const [currentArticle, setCurrentArticle] = useState<Article>({} as Article);
	const [articlesResult, setArticlesResult] = useState<Article[]>([]);

	const updateCurrentArticle = (newArticle: Article) => {
		setCurrentArticle(newArticle);
	}

	const updateArticlesResult = (newArticles: Article[]) => {
		setArticlesResult(newArticles);
	}

	return (
		<ArticleContext.Provider value={{ currentArticle, updateCurrentArticle, articlesResult, updateArticlesResult }}>
			{children}
		</ArticleContext.Provider>
	)
}
