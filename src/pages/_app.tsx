import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

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
				<Component {...pageProps} />
			</ThemeProvider>
		</>
  )
}

export default MyApp
