import { screen } from '@testing-library/react';

import { render } from 'utils/test-utils';

import { ArticleList } from '.';

import { article } from 'components/ArticleItem/mock';


jest.mock('components/ArticleItem', () => ({
	__esModule: true,
	ArticleItem: function Mock() {
		return <div data-testid="Mock ArticleItem"></div>
	}
}))


describe('<ArticleList />', () => {
	it('should render a list when a article[] is passed as parameter', () => {
		const articles = [article];
		render(<ArticleList articles={articles} />);
		expect(screen.getAllByTestId('Mock ArticleItem').length).toBe(articles.length);
	})
})
