import styled, { css } from "styled-components";


export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 33%;
		border: 1px solid red;
		img {
			width: 100%;
		}
		@media(max-width: ${theme.offsets.mobile}) {
			width: 100%;
		}
	`}
`

export const Content = styled.div`
`
