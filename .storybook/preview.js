import { GlobalStyles } from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import { article } from '../src/components/ArticleItem/mock';
import { ArticleContext  } from '../src/context/articleContext';

const articleContext = {
	currentArticle: article,
	articlesResult: [article],
	updateCurrentArticle: () => { },
	updateArticlesResult: () => { },
	loading: false,
	setLoading: () => { }
}


export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: theme.colors.white500
			},
			{
				name: 'dark',
				value: theme.colors.black500
			}
		]
	}
}

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<ArticleContext.Provider value={articleContext}>
				<GlobalStyles />
				<Story />
			</ArticleContext.Provider>
		</ThemeProvider>
	)
]
