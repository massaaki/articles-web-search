import { Article } from 'interfaces/article';
import { createContext, Dispatch, SetStateAction, useState } from 'react';



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
		setCurrentArticle(newArticle);
	}

	const updateArticlesResult = (newArticles: Article[]) => {
		setArticlesResult(newArticles);
	}

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
