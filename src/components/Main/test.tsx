import { screen } from '@testing-library/react';
import { render } from 'utils/test-utils';

import { Main } from '.';


jest.mock('components/SearchResultList', () => ({
	__esModule: true,
	SearchResultList: function Mock() {
		return <div data-testid="Mock SearchResultList" />
	}
}))


describe('<Main />', () => {
	it('should render the components correctly', () => {
		render(<Main />);
		expect(screen.getByTestId('Mock SearchResultList')).toBeInTheDocument();
	})
})

