import styled from "styled-components"

export const Button = styled.button`
	border: 3px solid ${({ theme }) => theme.black};
	padding: 12px 16px;
	font-weight: bold;
	cursor: pointer;
	font-size: 16px;
`