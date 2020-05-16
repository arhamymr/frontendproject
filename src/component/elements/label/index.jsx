import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.div`
	padding: 5px 12px;
	border-radius: 12px;
	display: inline-block;
	font-size: 11px;
	cursor: pointer;
	color: ${({theme}) => theme.primary };
	border: 1px solid ${({theme}) => theme.primary };
	:hover {
		background-color: ${({theme}) => theme.primary};
		color: ${({theme}) => theme.white };
	}	
`

const Index = ({ children, ...props }) => {
  return (
    <Label {...props}>
      {children} 
    </Label>
  );
};


export default Index