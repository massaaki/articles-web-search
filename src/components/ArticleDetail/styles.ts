import styled, { css } from "styled-components";


export const Wrapper = styled.div``;

export const Container = styled.div`
	width: 1400px;
	margin: 0 auto;
`

export const Header = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f2f2f2;
		padding: ${theme.spacings.medium};
		border-radius: 0.4rem;
	`}
`;

export const Thumb = styled.img`
	max-width: 120rem;
	max-height: 50rem;
`

export const Title = styled.h2`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xxlarge};
		text-align: center;
		margin: ${theme.spacings.small} 0;
	`}
`

export const Body = styled.div`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.weights.light};
		max-width: 800px;
		margin: 0 auto;
		text-align: justify;
	`}
`

export const TagsCloud = styled.div`
	${({ theme }) => css`
		border: 1px solid #eee;
		border-radius: 0.4rem;
		padding: ${theme.spacings.small};
		margin: ${theme.spacings.small} ${theme.spacings.xsmall};
		h3 {
			font-size: ${theme.font.sizes.medium};
			font-weight: ${theme.font.weights.regular};
			color: ${theme.colors.black500};
		}
	`}
`
