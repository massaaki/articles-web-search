import { Story, Meta } from '@storybook/react/types-6-0';
import { ArticleList } from '.';


export default {
	title: 'ArticleList',
	component: ArticleList
} as Meta;

export const Basic: Story = () => <ArticleList />
