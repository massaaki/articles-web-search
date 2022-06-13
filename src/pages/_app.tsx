import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ArticleProvider } from "context/articleContext";

import theme from '../styles/theme';
import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Article news</title>
				</Head>
				<GlobalStyles />
				<ArticleProvider>
					<Component {...pageProps} />
				</ArticleProvider>
			</ThemeProvider>
		</>
  )
}

export default MyApp
