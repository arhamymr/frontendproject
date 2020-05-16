import React from "react";
import styled from "styled-components"

const Button = styled.button`
	padding: 14px 20px;
	font-weight: bold;
	cursor: pointer;
	border: none;
	border-radius: 30px;
	background-color: ${({theme}) => theme.blue };
	color: ${({theme}) => theme.white };
	font-size: 16px;
`
const Index = ({ children, type = 'button', ...props }) => (
  <Button type={type} {...props}>{children}</Button>
);

export default Index;
