import styled, { css } from "styled-components";

export const Thumb = styled.img`
	max-width: 120rem;
	max-height: 50rem;
`

export const Title = styled.h2`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xxlarge};
	`}
`

export const Body = styled.div`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium};
	`}
`
