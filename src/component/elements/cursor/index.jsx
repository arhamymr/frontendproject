import React, { useEffect } from "react";
import { customCursor } from "Animations"
import styled from "styled-components";

const Cursor = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	position: absolute;
	pointer-events: none;
	cursor: none;
	backdrop-filter: invert(100%);
`

const Index = ({ children }) => {
	
	useEffect(() => {
		customCursor()
	}, [])

	return (
		<Cursor className="cursor"> 
			{children} 
		</Cursor>
	)
};

export default Index;
