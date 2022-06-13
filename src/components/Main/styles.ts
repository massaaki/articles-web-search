import styles, { css } from 'styled-components';

export const Container = styles.div`
	${({ theme }) => css`
		max-width: 1400px;
		margin: 0 auto;
		min-height: 60vh;
		h1 {
			color: ${theme.colors.blue500};
			font-weight: ${theme.font.weights.light};
			font-family: ${theme.font.family};
		}
	`}
`
