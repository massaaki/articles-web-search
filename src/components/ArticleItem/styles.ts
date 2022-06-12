import styled, { css } from "styled-components";


export const Wrapper = styled.div`
	${({ theme }) => css`
		max-width: 33%;
		padding: ${theme.spacings.small};
		border: 1px solid red;
		@media(max-width: ${theme.offsets.mobile}) {
			max-width: 100%;
		}
	`}
`
