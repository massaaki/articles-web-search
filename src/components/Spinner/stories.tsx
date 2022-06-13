import { Story, Meta } from '@storybook/react/types-6-0';
import { Spinner } from '.';

export default {
	title: 'Spinner',
	component: Spinner
} as Meta;

export const Basic: Story = () => <Spinner />
