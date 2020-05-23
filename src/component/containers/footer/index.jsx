import React from 'react';
import { Container,Wrapper } from "./styled";

import { Link } from "react-router-dom";
import { Social } from "Elements"

const Footer = () => {
	return (
		<Wrapper>
		<Container>
			<small>by arhamymr <br/>@frontendproject-{new Date().getFullYear()}</small>
			<Social/>
		</Container>
		</Wrapper>
	)
}

export default Footer