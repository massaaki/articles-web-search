import { Story, Meta } from '@storybook/react/types-6-0';
import { ArticleList } from '.';
import {article} from '../ArticleItem/mock';

export default {
	title: 'ArticleList',
	component: ArticleList
} as Meta;

export const Basic: Story = () => <ArticleList  articles={[article]}/>
