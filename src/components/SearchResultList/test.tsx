import { screen, fireEvent } from '@testing-library/react';

import { ArticleContextType } from 'context/articleContext';
import { render } from 'utils/test-utils';

import { SearchResultList } from '.';

import { article } from 'components/ArticleItem/mock';




jest.mock('components/ArticleList', () => ({
	__esModule: true,
	ArticleList: function Mock() {
		return <div data-testid="Mock ArticleList"></div>
	}
}))
jest.mock('components/Spinner', () => ({
	__esModule: true,
	Spinner: function Mock() {
		return <div data-testid="Mock Spinner"></div>
	}
}))


jest.mock('next/link', () => ({
	__esModule: true,
	default: function Mock({ children }: { children: React.ReactNode }) {
		return <div>{children}</div>
	}
}))


describe('<SearchResultList />', () => {
	it('should render a ArticleList', () => {
		const articleContext: ArticleContextType = {
			currentArticle: article,
			articlesResult: [article],
			updateCurrentArticle: jest.fn(),
			updateArticlesResult: jest.fn(),
			loading: false,
			setLoading: jest.fn()
		}
		render(<SearchResultList />, articleContext);
		expect(screen.getByTestId('Mock ArticleList')).toBeInTheDocument();
	});
	it('should render a Spinner when Loading is true', () => {
		const articleContext: ArticleContextType = {
			currentArticle: article,
			articlesResult: [article],
			updateCurrentArticle: jest.fn(),
			updateArticlesResult: jest.fn(),
			loading: true,
			setLoading: jest.fn()
		}

		render(<SearchResultList />, articleContext);
		expect(screen.getByTestId('Mock Spinner')).toBeInTheDocument();
	})
})
