import {screen} from '@testing-library/react';
import { render } from 'utils/test-utils';

import { ArticleDetail } from '.';

import { article } from 'components/ArticleItem/mock';
import { ArticleContextType } from 'context/articleContext';

const articleContext: ArticleContextType = {
	currentArticle: article,
	articlesResult: [article],
	updateCurrentArticle: jest.fn(),
	updateArticlesResult: jest.fn(),
	loading: false,
	setLoading: jest.fn()
}

describe('<ArticleDetail />', () => {
	it('should render the article if article is loaded on context', () => {
		render(<ArticleDetail />, articleContext);
		expect(screen.getByRole('heading', { name: /Taylor Swift/i })).toBeInTheDocument();
	});

	it('should render a error message when no article is loaded on context', () => {
		render(<ArticleDetail />);
		expect(screen.getByText(/Ops, this post has no content/i)).toBeInTheDocument();
	})
})
