import React, { useState, useEffect } from 'react';
import Logo from "Assets/logo-full.png";
import { Content, Release, Title } from "./styled";
import Footer from "Containers/footer";
import { Link } from "react-router-dom";

import styled from "styled-components"

import anime from 'animejs/lib/anime.es.js';

const Box = styled.div`
	width: 20px;
	height: 20px;
	background-color: red;
`
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
		<Content>
			<div>
				<h1> Sharing <br/>
						 Knowledge</h1>
				<h2> 2020 </h2>	
				<ul>
					<li>
						<Link to='/works'>
							<Release> April 24 </Release>
							<Title> About box-sizing </Title>
						</Link>
					</li>
					
					<li>
						<Link to='/works'>
							<Release> April 24 </Release>
							<Title> About box-sizing </Title>
						</Link>
					</li>

					<li>
						<Link to='/works'>
							<Release> April 24 </Release>
							<Title> About box-sizing </Title>
						</Link>
					</li>
				</ul>
			</div>
		</Content>
		
		<Footer/>
		</>
	)
}

export default Header;