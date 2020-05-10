import React, { useState, useEffect } from 'react';
import Logo from "Assets/logo-full.png";
import { Content, Wrapper } from "./styled";
import Footer from "Containers/footer";
import { Link } from "react-router-dom";
import { Card } from "Elements"
// cursor 

const Header = () => {
	
	const [data, setData] = useState({})
	useEffect(() => {
		fetch("http://127.0.0.1:8000/article/")
		.then( res => {
			if (res.status === 200){
				res.json()
			}
		}).then( resJson => {
			setData(resJson)
		})
	}, [])

	return (
		<>
		<Wrapper>
			<div>
				<h1> Sharing <br/>
						 Knowledge</h1>
			</div>
			<Content>
				<p> No article yet, will update soon as possible :(. </p>
			</Content>
		</Wrapper>
		
		<Footer/>
		</>
	)
}

export default Header;