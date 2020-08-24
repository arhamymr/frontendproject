import React, { useState, useEffect } from 'react';
import { Card } from "Elements"

import {
	Content,
	Wrapper,
	Header
} from "./styled";

import { getListArticle } from './action';

// part
import Footer from "Containers/footer";


const Index = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		getListArticle()
		.then(d => setData(d))
	}, [])

	console.log("inside daat", data)
	return (
		<>
		<Wrapper>
			<Header>
					<h1> Blogs </h1>
					<h3> Here i share some of my knowledge. </h3>
			</Header>
			<Content>
				{
					data.map(item => (
						<>
							<Card
								image={"http://localhost:1337" + item?.cover?.url} title="test"
							/>
							<h2>{item.titleArticle}</h2>
							<p>{item.description}</p>
						</>
					))
				}
			</Content>
		</Wrapper>
		<Footer/>
		</>
	)
}

export default Index;
