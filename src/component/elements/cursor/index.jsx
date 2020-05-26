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
	z-index: 9999999;
`

const Dot = styled.div`
	width: 5px;
	position: absolute;
	height: 5px;
	margin: 10px;
	pointer-events: none;
	z-index: 999999;
	background-color: ${({theme}) => theme.red };
	border-radius: 50%;
`

const Index = () => {	
	useEffect(() => {
		customCursor()
	}, [])
	return (
		<div>
			<Cursor className="cursor"/>
			<Dot className="dot"/>
		</div>
	)
};

export default Index;
