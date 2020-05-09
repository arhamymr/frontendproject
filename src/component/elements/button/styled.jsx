import styled from "styled-components"

export const Button = styled.button`
	Border: 3px solid ${({ theme }) => theme.background };
	padding: 12px 16px;
	font-weight: bold;
	cursor: pointer;
	font-size: 16px;
`