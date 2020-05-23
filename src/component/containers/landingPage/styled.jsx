import styled, {keyframes}from 'styled-components'
import { maxMD, maxSM} from "Utils";


const anim = keyframes`
	0% {
		opacity: 0;
		top: 20px;
	}
	100% {
		opacity: 1;
		top: 0px;
	}

`
export const Wrapper = styled.div`
	width: 100%;
	max-width: 800px;
	padding: 16px;
	margin: 0 auto;
	color:  ${({theme}) => theme.black };
	h1 {
			font-size: 60px;
			${maxSM}{
				font-size: 40px;
			}	
	}
`

export const Content = styled.div`
	a {
		text-decoration: none;
		color: ${({theme}) => theme.black };
	}
	li {
		margin-bottom: 12px;
		padding: 12px;
		border-bottom: 1px solid ${({theme}) => theme.border };
		:last-of-type {
			border: none;
		}
		: hover {
			background-color: ${({theme}) => theme.backgroundSoft };
		}
	}
`

export const Title = styled.p`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 4px;
	:hover {
		color: ${({theme}) => theme.primary };
	}
`

export const SearchBox = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 0;
	max-width: 300px;
	margin-bottom: 24px;
	input {
		margin-right: 12px;
	}
	i {
		font-size: 40px;
		cursor: pointer;
	}
`

export const SearchResult = styled.ul`
	border: 1px solid ${({ theme }) => theme.border };
	padding: 16px;
	position: relative;
	border-radius: 4px;
	position: relative;
	animation:  .4s ${anim} ease;
	list-style: none;
	li {
		margin: 12px 0;
		padding-bottom: 12px;
		border-bottom: 1px solid ${({theme}) => theme.border }; 
		a {
			text-decoration: none;
			color: ${({ theme }) => theme.black };
		}
		:last-of-type {
			border: none;
		}
	}
`

export const SearchIcon = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	max-width: 300px;
	p {
		margin-left: 12px;
		color: ${({theme}) => theme.fontSoft};
	}
`

export const ErrorWrapper = styled.div`
	text-align: center;
	padding: 24px;
	img {
		width: 100px;
		margin-bottom:12px;
	}
	p {
		margin-bottom: 12px;
	}
`
export const Close = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({theme}) => theme.yellow };
	padding: 4px 12px;
	position: absolute;
	right:  10px;
	top: 10px;
	border-radius: 12px;
	cursor: pointer;
`

export const NotFound = styled.div`
	text-align: center;
	img {
		max-width: 100px;
	}
`