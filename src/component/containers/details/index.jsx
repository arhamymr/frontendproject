import React, { useEffect, useState } from 'react';

import { 
	Container, 
	Content,
	Title,
	Published,
	Cover,
	Article
} from "./styled";

import parse from "html-react-parser"
import { useParams } from "react-router-dom"

import Share from './share';

const Index = ({ img }) => {
	const { id } = useParams()
	const secretKey = "AIzaSyDJymzqE90jcSw45Eek_Y1EBUuY_h0tgfk"
	const blogID = "2100493342191057670"
	const url = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${id}?key=${secretKey}`

	const [data, setData] = useState(null)
	
	// effect
	useEffect(() => {
		fetch(url)
	  .then(response => response.json())
	  .then(json => setData(json))
		}, [])
	console.log(data)
	return (
		<Container>
			<Content>
				{ data ?
				<>
				<Cover img={img} />
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