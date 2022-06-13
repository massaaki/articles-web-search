import { screen, fireEvent } from '@testing-library/react';

import { ArticleContextType } from 'context/articleContext';
import { render } from 'utils/test-utils';

import { ArticleItem } from '.';

import {article} from './mock';


const articleContext: ArticleContextType = {
	currentArticle: article,
	articlesResult: [article],
	updateCurrentArticle: jest.fn(),
	updateArticlesResult: jest.fn(),
	loading: false,
	setLoading: jest.fn()
}

jest.mock('next/link', () => ({
	__esModule: true,
	default: function Mock({ children }: { children: React.ReactNode }) {
		return <div>{children}</div>
	}
}))


describe('<ArticleItem />', () => {
	it('should render a article is passed as parameter', () => {
		render(<ArticleItem article={article} />, articleContext);
		expect(screen.getByRole('heading', { name: /Taylor Swift/i })).toBeInTheDocument();

		fireEvent.click(screen.getByText(article.title));
		expect(articleContext.updateCurrentArticle).toHaveBeenCalledWith(article);
	})
})
