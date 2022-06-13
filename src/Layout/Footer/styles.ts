import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		background: ${theme.colors.black500};
		color: ${theme.colors.white500};
		padding: ${theme.spacings.small};
		margin-top: ${theme.spacings.xxlarge};
		min-height: 15rem;
		svg {
			width: 150px;
		}

	`}

`
