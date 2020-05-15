import React, { useEffect, useState } from 'react';

import { 
	Container, 
	Content,
	Title,
	Published,
	Article
} from "./styled";

import parse from "html-react-parser"
import { useParams } from "react-router-dom"

import Share from './share';
// api
import { API_GET_DETAIL_POST } from "Config/api"

const Index = () => {
	const { id } = useParams()

	const [data, setData] = useState(null)
	
	// effect
	useEffect(() => {
		fetch(API_GET_DETAIL_POST(id))
	  .then(response => response.json())
	  .then(json => setData(json))
		}, [])

	return (
		<Container>
			<Content>
				{ data ?
				<>
				<Share />
				<Title>
					{data.title}
				</Title>
				<Published> {data.published} </Published>
				<p>{ data.author.displayName }</p>
				<Article>
					{parse(data.content)}				
				</Article>
				</>
				: 
				<p> loading </p>
				}
			</Content>
		</Container>
	)
}

export default Index;