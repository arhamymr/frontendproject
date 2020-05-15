import React from 'react';
import styled from "styled-components";

const Input = styled.input`
		padding: 12px;
		width: 100%;
		max-width: 250px;
		border: 3px solid ${({theme}) => theme.black };
`

const Index = ({...props}) => {
	return (
		<Input {...props} />
	)
}

export default Index