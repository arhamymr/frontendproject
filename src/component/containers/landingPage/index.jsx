import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Icons, Label, Button } from "Elements"

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

	// effect
	
	const handleGetPost = () => {
		setError(false)
		fetch(API_GET_LIST_POST)
	  .then(response => response.json())
	  .then(json => setData(json))
	  .catch(() => setError(true) )
		
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
						<img src={trypng} alt="foto pixabay"/>
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
						data && data.items && data.items.map( item => {
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
					</ul>
				}
			</Content>
		</Wrapper>
		<Footer/>
		</>
	)
}

export default Index;