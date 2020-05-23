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

	const fetchData = (headers) => {
		fetch(API_GET_DETAIL_POST(id), {
			"method": "GET",
			"headers": headers
		})
	  .then(response => {
	  	if (response.status === 304) {
		  		return setData(JSON.parse(localStorage.getItem("post-detail")))
	  	}
	  	if (response.status === 200) {
	  		return response.json()
	  	}
	  })
	  .then(json => {
	  	if (json) {
		  	setData(json)
		  	localStorage.setItem("etag-post", json.etag)
		  	localStorage.setItem("post-detail", JSON.stringify(json))
		  }
		 })
	  .catch( () => setError(true))
	}
	// effect
	const handleGetDetail = () => {
		const headers = {
			"Accept-Encoding": "gzip",
			"User-Agent": navigator.userAgent
		}
		if (localStorage.getItem("etag-post")) {
			fetchData({
				...headers,
				"If-None-Match": localStorage.getItem("etag-post")
			})
		} else {
			fetchData({
				...headers,
			})
		}
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