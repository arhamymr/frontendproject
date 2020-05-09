import styled from 'styled-components'
import { maxMD, maxSM} from "Utils";

export const Content = styled.div`
	width: 100%;
	max-width: 650px;
	padding: 16px;
	display: flex;
	margin: -60px auto 0 auto;
	${maxMD} {
		margin-top: 0px;
	}
	justify-content:space-between;
	h1 {
		font-size: 40px;
		margin-bottom: 23px;
	}
	h2 {
		color: ${({theme}) => theme.fontSoft};
		margin-bottom: 12px;
		font-size: 25px;
		letter-spacing: 10px;
	}
	> div {
		width: 100%;
	}
	> div > ul > li > a {
		display: flex;
		${maxSM} {
			display: block;
			margin-bottom: 12px;
		}
		align-items: center;
		border-bottom: 1px solid ${({theme}) => theme.backgroundSoft };
		cursor: pointer;
		text-decoration: none;
		: hover {
			background-color: ${({theme}) => theme.backgroundSoft };
		}
	}
`

export const Release = styled.div`
	background-color: ${({theme}) => theme.backgroundSoft };
	padding: 25px 30px;
	color: ${({theme}) => theme.fontSoft };
	${maxSM} {
		padding: 8px;
		width: 100px;
	}
`

export const Menu = styled.ul`
	position: sticky;
	top: 50px;
	${maxMD} {
		display: none;
	}
	li {
		margin-bottom: 17px;
	}
	li a {
		text-decoration: none;
		color: ${({theme}) => theme.black };
		:hover {
			color: ${({theme}) => theme.red };
		}
	}
`

export const Title = styled.p`
	padding: 20px 30px;
	color: ${({theme}) => theme.black };
	font-size: 20px;
	: hover {
			color: ${({theme}) => theme.red };
		}
`