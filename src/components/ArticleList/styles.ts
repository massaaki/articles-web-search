import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;

		@media(max-width: ${theme.offsets.mobile}) {
			flex-direction: column;
		}
	`}

`
