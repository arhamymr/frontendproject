import React, { useState } from 'react';
import Logo from "Assets/logo.png";
import { Link } from "react-router-dom";

// assets
import PyAny from "Assets/pyany.png"
import MiMusic from "Assets/mimusic.png"

import DTC from "Assets/dtc.PNG";
import Gakken from "Assets/gakken.PNG";

import { 
	Container, 
	Content, 
	Navigation, 
	PortoList,
	PortofolioItem,
	Img,
	ActionContainer
} from "./styled";

const Portofolio = () => {
	const [show, setShow] = useState(false)
	return (
		<>
		<Container>
			<Content>
				<PortoList>
					<h1> 
		        Interesting ? <br/>
		        you can find <br/>
		        my works here
		      </h1> 

		      <h2> 2020 </h2>

		      <h3> Redesign Python Anywhere - Self Project</h3>
		      <Img image={PyAny}/>
		      <a href="www.google.com"> See the live version </a>

		      <h3> Redesign Mi Music Android - Self Project</h3>
		      <Img image={MiMusic}/>
		      <ActionContainer>
		      	<a href="www.google.com"> See the live version </a>
		      </ActionContainer>

					<h2> 2019 </h2>

					<h3> Frontend Developer - Gakken Indonesi - Fulltime </h3>
		      <Img image={Gakken}/>
		      <ActionContainer>
		      	<a href="www.google.com"> See Sites </a>
		      </ActionContainer>

					<h3> Frontend Developer - Docotel Teknologi Celebes - Fulltime </h3>
		      <Img image={DTC}/>
		      <ActionContainer>
		      	<a href="www.google.com"> See Sites </a>
		      </ActionContainer>

				</PortoList>
				<Navigation>
						<h2> 2020 </h2>
						<ul>
							<li><a href="#gakken"> Python Anywhere </a></li>
							<li><a href="#dtc"> Mi Music </a></li>
						</ul>
						<h2> 2019 </h2>
						<ul>
							<li><a href="#gakken"> Gakken Indonesia </a></li>
							<li><a href="#dtc"> Docotel Teknologi Celebes</a></li>
						</ul>
				</Navigation>
			</Content>
		</Container>
		</>
	)
}

export default Portofolio;