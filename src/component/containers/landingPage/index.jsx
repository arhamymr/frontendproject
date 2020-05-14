import React, { useState, useEffect } from 'react';
import Logo from "Assets/logo-full.png";
import { Content, Wrapper, Title } from "./styled";
import Footer from "Containers/footer";
import { Link } from "react-router-dom";
import { Card } from "Elements"
// cursor 

const Header = () => {
	const secretKey = "AIzaSyDJymzqE90jcSw45Eek_Y1EBUuY_h0tgfk"
	const blogID = "2100493342191057670"
	const url = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${secretKey}`
	
	const [data, setData] = useState(null)
	
	// effect
	useEffect(() => {
		fetch(url)
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
			<Content>
				<ul>
				{ data === null ? 
					<p> loading </p>
					:
					data && data.items && data.items.map( item => {
						let d = new Date(item.published)
						return <li key={item.id}> 
						<p>{d.toDateString()}</p>
						<Link to={`/post/${item.id}`}><Title>{item.title}</Title></Link>
					</li> })
				}
				</ul>
			</Content>
		</Wrapper>
		
		<Footer/>
		</>
	)
}

export default Header;