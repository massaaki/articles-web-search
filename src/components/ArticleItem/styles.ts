import styled, { css } from "styled-components";


export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 33%;
		padding: ${theme.spacings.xxsmall};
		img {
			width: 100%;
		}
		@media(max-width: ${theme.offsets.mobile}) {
			width: 100%;
		}
	`}
`

export const Content = styled.div`
	${({ theme }) => css`
		position: relative;
		min-height: 30rem;
		border-radius: 0.4rem;
		cursor: pointer;
	`}
`

export const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-end;
	background: linear-gradient(360deg, rgba(36, 67, 97, 0.6) 28.39%, rgba(104, 51, 137, 0) 86.02%);
	border-radius: 0.4rem;
`

export const Title = styled.h3`
	${({ theme }) => css`
		padding: ${theme.spacings.xsmall};
		color: ${theme.colors.white500};
		font-size: ${theme.font.sizes.large};
		font-weight: ${theme.font.weights.medium};
	`}
`
