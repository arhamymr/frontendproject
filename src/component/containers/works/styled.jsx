import styled from 'styled-components'
import { width, maxSM } from "Utils"

export const Container = styled.div`
	width: 100%;
`

export const Content = styled.div`
	padding: 16px;
	display: flex;
	justify-content: center;
	max-width: 700px;
	margin: 50px auto 0 auto;
`

export const PortoList = styled.div`
	flex: 3;
	h1 {
		font-size: 40px;
		margin-bottom: 50px;
	}
	h2 {
		font-size: 25px;
		margin-bottom: 16px;
		letter-spacing: 10px;
		color: ${ ({theme}) => theme.fontSoft };
	}
	h3 {
		margin-top: 30px;
		color: ${ ({theme}) => theme.fontSoft };
		margin-bottom: 30px;
	}
`

export const Navigation = styled.div`
	flex: 1;
	${ maxSM } {
		display: none;
	}
	li a {
		display: block;
		color: ${({theme}) => theme.black };
		text-decoration: none;
		margin-bottom: 16px;
		:hover {
			color: ${({theme}) => theme.red };
		}
	}
	h2 {
		font-size: 25px;
		margin-bottom: 16px;
		letter-spacing: 10px;
		color: ${ ({theme}) => theme.fontSoft };
	}
`

export const PortofolioItem = styled.div`
	box-shadow: 0 1px 10px ${({theme}) => theme.boxShadow};
	padding: 8px;
	border: none;
	margin-bottom: 16px;
	border-radius: 4px;
	div {
		padding: 16px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		a {
			font-weight: bold;
			color: ${ ({theme}) => theme.red };
			text-decoration: none;
		}
	}
`

export const Img = styled.img`
	margin-right: 16px;
	width: 100%;
	height: 150px;
	border: none;
	border-radius: 4px;
	transition: height .5s;
	background-size: cover;
	cursor: pointer;
	background-repeat: no-repeat;
	background-position: center;
	background-color: ${({theme}) => theme.boxShadow };
	background-image: url("${({image}) => image }");
	: hover {
		height: 370px;
		background-size: contain;
	}
`

export const ActionContainer = styled.div`
	display: flex;
	margin-bottom: 30px;
`