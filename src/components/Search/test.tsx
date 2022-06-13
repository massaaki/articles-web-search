
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { article } from 'components/ArticleItem/mock';
import { ArticleContextType } from 'context/articleContext';
import { render } from 'utils/test-utils';

import { Search } from '.';



const articleContext: ArticleContextType = {
	currentArticle: article,
	articlesResult: [article],
	updateCurrentArticle: jest.fn(),
	updateArticlesResult: jest.fn(),
	loading: false,
	setLoading: jest.fn()
}


describe('<Search />', () => {
	it('should render the components correctly', () => {
		render(<Search />);
		expect(screen.getByPlaceholderText('Search for some term')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
	});
})

