import React from 'react';
import { Container,Wrapper } from "./styled";

const Footer = () => {
	return (
		<Wrapper>
			<Container>
			<ul>
				<li><a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/arhamymr">Dribbble</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/arhamymr">Github</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/arhamymr/">Instagram</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://www.codepen.com/arhamymr">Codepen</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arhamymr">Linkedin</a></li>
			</ul>
			</Container>
		</Wrapper>
	)
}

export default Footer
