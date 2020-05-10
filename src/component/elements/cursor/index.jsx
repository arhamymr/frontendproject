import React, { useEffect } from "react";
import { customCursor } from "Animations"
import styled from "styled-components";

const Cursor = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	position: absolute;
	pointer-events: none;
	backdrop-filter: invert(100%);
	display: flex;
	z-index: 9999999;
	justify-content: center;
	align-items: center;
`

const Index = () => {
	
	useEffect(() => {
		customCursor()
	}, [])

	return (
		<div>
			<Cursor className="cursor"/> 
		</div>
	)
};

export default Index;
