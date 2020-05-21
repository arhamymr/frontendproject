import React, { useEffect, useState } from 'react';

import { 
	Container, 
	Content,
	Title,
	Published,
	Article,
	Author,
	Avatar,
	ErrorWrapper
} from "./styled";

import { Skeleton, Button } from "Elements";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";

import Share from './share';

// api
import { API_GET_DETAIL_POST } from "Config/api";

// image 
import trypng from "Assets/try.png";

const Index = () => {
	const { id } = useParams()

	const [data, setData] = useState(null)
	const [error, setError] = useState(false)

	// effect
	const handleGetDetail = () => {
		fetch(API_GET_DETAIL_POST(id))
	  .then(response => response.json())
	  .then(json => setData(json))
	  .catch( () => setError(true))
	}

	useEffect(() => {
		handleGetDetail();
		}, [])

	return (
		<Container>
			<Content>
				
				{ error && 
					<ErrorWrapper>
						<img src={trypng} alt="foto pixabay"/>
						<p>Something wrong</p>
						<Button className="expand" onClick={handleGetDetail}> Try Again </Button>
					</ErrorWrapper>
				}
				<Share shareUrl={"data.author.image.url"} />
						
				{ data  ?
					<>
						<Share shareUrl={data.author.image.url} />
						<Title>
							{data.title}
						</Title>
						<Published> {new Date(data.published).toDateString()} </Published>
						<Author>
							<Avatar img={`http:${data.author}`}/>
							<p>{ data.author.displayName }</p>
						</Author>
						<Article>
							{parse(data.content)}				
						</Article>
					</>
					: 
					!error && 
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