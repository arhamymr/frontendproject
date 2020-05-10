import React, { useState } from 'react';
import Logo from "Assets/logo.png";
import { Link } from "react-router-dom";

import asset1 from "Assets/asset(1).png"
import asset2 from "Assets/asset(2).png"
import asset3 from "Assets/asset(3).png"
import asset4 from "Assets/asset(4).png"
import asset5 from "Assets/asset(5).png"
import asset6 from "Assets/asset(6).png"

import { 
	Container, 
	Content,
	Gallery, 
	PortoList,

	Item1,
	Item2,
	Item3,
	Item4,
	Item5
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
		      <Gallery className="gallery">
		      	<Item1 image={asset1}/>
		      	<Item2 image={asset2}/>
		      	<Item3 image={asset3}/>
		      	<Item4 image={asset4}/>
		      	<Item5 image={asset5}/>
		      </Gallery>
				</PortoList>
			</Content>
		</Container>
		</>
	)
}

export default Portofolio;