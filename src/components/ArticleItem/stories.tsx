import { Story, Meta } from '@storybook/react/types-6-0';
import { ArticleItem } from '.';
import { article } from './mock';

export default {
	title: 'ArticleItem',
	component: ArticleItem
} as Meta;

export const Basic: Story = () => <ArticleItem article={article} />
