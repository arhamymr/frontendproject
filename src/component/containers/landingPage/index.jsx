import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Icons, Label, Button, Cursor } from "Elements"

import { 
	Content, 
	Wrapper, 
	Title, 
	SearchIcon,
	SearchBox,
	ErrorWrapper
} from "./styled";

// part 
import Loading from "./loading"
import Search from "./search"
import Footer from "Containers/footer";

// image 

import trypng from "Assets/try.png";

// api
import { API_GET_LIST_POST } from "Config/api"

const Index = () => {	

	const [data, setData] = useState(null)
	const [searching, setSearching] = useState(false)
	const [error, setError] = useState(true)
	
	const fetchData = (headers) => {
			fetch(API_GET_LIST_POST, {
				method: "GET",
				headers: headers
			})
		  .then(response => {
		  	if (response.status === 304) {
		  		return setData(JSON.parse(localStorage.getItem("post")))
		  	}
		  	if (response.status === 200) {
		  		return response.json()
		  	}
		  })
		  .then(json => {
		  	if (json) {
			  	setData(json.items)
			  	localStorage.setItem("etag", json.etag)
			  	localStorage.setItem("post", JSON.stringify(json.items))
			  }
		  })
		  .catch(e => setError(true))
	}

	const handleGetPost = () => {
		setError(false)

		const headers = {
			"Accept-Encoding": "gzip",
			"User-Agent": navigator.userAgent
		}

		if (localStorage.getItem("etag")) {
			fetchData({
				...headers,
				"If-None-Match": localStorage.getItem("etag")
			})
		} else {
			fetchData({
				...headers
			})
		}
	}

	useEffect(() => {
		handleGetPost()
	}, [])
	
	const handleIsSearching = (bool) => {
		setSearching(bool)
	}

	return (
		<>
		<Wrapper>
			<div>
				<h1> Sharing <br/>
						 Knowledge</h1>
			</div>
			<Search isSearching={handleIsSearching} />
			<Content>
				{ error && !searching && 
					<ErrorWrapper>
						<img src={trypng} alt="something wrong"/>
						<p>Something wrong</p>
						<Button className="expand" onClick={handleGetPost}> Try Again </Button>
					</ErrorWrapper>
				}
				{
					!searching && !error &&
					<ul>
					{ data === null ?
						<Loading/>
						:
						<>
						<Cursor/>
						{ data && data.map( item => {
							let d = new Date(item.published);
							return (
								<li key={item.id}> 
									<p>{d.toDateString()}</p>
									<Link to={`/post/${item.id}`}>
											<Title>{item.title}</Title>
									</Link>
									{
										item.labels && item.labels.map((i, index) => (
											<Label key={index}>{i}</Label>
										))
									}
								</li> 
							)
						})
						}
						</>
					}
					</ul>
				}
			</Content>
		</Wrapper>
		<Footer/>
		</>
	)
}

export default Index;