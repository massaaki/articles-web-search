import styled, { css } from "styled-components";


export const Wrapper = styled.div`

`

export const Content = styled.div`
	position: relative;
`

export const Recommendations = styled.div`
	${({ theme }) => css`
		position: absolute;
		max-width: 30rem;
		width: 100%;
		padding: ${theme.spacings.xxsmall};
		z-index: 10;
		background: ${theme.colors.white500};
		border: 1px solid ${theme.colors.black500};
		ul {
			li {
				font-size: ${theme.font.sizes.small};
				font-weight: ${theme.font.weights.light};
				margin: ${theme.spacings.xxsmall} 0;
				cursor: pointer;
				&:hover {
					font-weight: bold; //temporary
				}
			}
		}

	`}
`
