import { createGlobalStyle, DefaultTheme, GlobalStyleComponent, css } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-types
export const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 100;
		font-display: swap;
		src: local(''),
		url('/fonts/Roboto/Roboto-Thin.ttf');
	}

	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 300;
		font-display: swap;
		src: local(''),
		url('/fonts/Roboto/Roboto-Light.ttf');
	}

	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local(''),
		url('/fonts/Roboto/Roboto-Regular.ttf');
	}

	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: local(''),
		url('/fonts/Roboto/Roboto-Medium.ttf');
	}
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: local(''),
		url('/fonts/Roboto/Roboto-Bold.ttf');
	}
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 900;
		font-display: swap;
		src: local(''),
		url('/fonts/Roboto/Roboto-Black.ttf');
	}

	${({ theme }) => css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			list-style: none;
		}
		html {
			font-size: 62.5%;
		}
		body {
			font-family: ${theme.font.family};
			font-weight: ${theme.font.weights.regular};
		}

	`}
`

export default GlobalStyles
