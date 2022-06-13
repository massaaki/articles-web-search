import { Story, Meta } from '@storybook/react/types-6-0';
import { ArticleDetail } from '.';
// import { article } from './mock';

export default {
	title: 'ArticleDetail',
	component: ArticleDetail,
} as Meta;

export const Basic: Story = () => <ArticleDetail />
