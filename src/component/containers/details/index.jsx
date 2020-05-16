import React, { useEffect, useState } from 'react';

import { 
	Container, 
	Content,
	Title,
	Published,
	Article,
	Author,
	Avatar
} from "./styled";

import { Skeleton } from "Elements";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";

import Share from './share';
// api
import { API_GET_DETAIL_POST } from "Config/api";

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
				<Share shareUrl={data.author.image.url} />
				<Title>
					{data.title}
				</Title>
				<Published> {new Date(data.published).toDateString()} </Published>
				<Author>
					<Avatar img={data.author}/>
					<p>{ data.author.displayName }</p>
				</Author>
				<Article>
					{parse(data.content)}				
				</Article>
				</>
				: 
				<>
					<Skeleton 
						marginTop="50px"
						width="80%" 
						marginBottom="12px"
					/>
					<Skeleton 
						width="20%" 
						marginBottom="12px"
					/>
					<Skeleton 
						width="30%" 
						marginBottom="12px"
					/>
					<Skeleton height="300px"/>
				</>
				}
			</Content>
		</Container>
	)
}

export default Index;