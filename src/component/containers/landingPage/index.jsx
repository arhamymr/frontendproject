import React, { useState, useEffect } from 'react';
import Logo from "Assets/logo-full.png";
import { Link } from "react-router-dom";
import { Icons } from "Elements"

import { 
	Content, 
	Wrapper, 
	Title, 
	SearchIcon,
	SearchBox
} from "./styled";

// part 
import Loading from "./loading"
import Search from "./search"

import Footer from "Containers/footer";

// api
import { API_GET_LIST_POST } from "Config/api"

const Index = () => {	

	const [data, setData] = useState(null)
	// effect
	useEffect(() => {
		fetch(API_GET_LIST_POST)
	  .then(response => response.json())
	  .then(json => setData(json))
		}, [])

	return (
		<>
		<Wrapper>
			<div>
				<h1> Sharing <br/>
						 Knowledge</h1>
			</div>
			<SearchIcon>
				<Icons name="search"/>
				<p> Search Article </p>
			</SearchIcon>
			<Search/>
			<Content>
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
							</li> 
						)
					})
				}
				</ul>
			</Content>
		</Wrapper>
		<Footer/>
		</>
	)
}

export default Index;