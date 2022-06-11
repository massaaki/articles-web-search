import { render, screen } from '@testing-library/react';
import { Main } from '.';


describe('<Main />', () => {
	it('should rendert he heading', () => {
		render(<Main />);
		expect(screen.getByRole('heading', { name: /Main Component/i })).toBeInTheDocument();
	})
})

