import styled from 'styled-components'
import { width, maxSM } from "Utils"

export const Container = styled.div`
	width: 100%;
`

export const Content = styled.div`
	padding: 16px;
	display: flex;
	justify-content: center;
	max-width: 1200px;
	margin: 50px auto 0 auto;
`

export const Gallery = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 300px 300px 300px;
	${ maxSM } {
		display: block;	
	}
`

export const PortoList = styled.div`
	flex: 3;
	h1 {
		font-size: 60px;
		margin-bottom: 50px;
	}
	h2 {
		font-size: 25px;
		margin-bottom: 16px;
		letter-spacing: 10px;
		color: ${ ({theme}) => theme.fontSoft };
	}
`

const Item = styled.a`
	background-image: url('${({image}) => image }');
	background-size: cover;
	${ maxSM } {
		width: 100%;
		height: 300px;
	}
	position: relative;
	overflow: hidden;
	cursor: pointer;
	display: block;
	::after {
		content: "Title not set - 2020";
		position: absolute;
		top: -52px;
		transition: all .5s;
		color: ${({theme}) => theme.white};
		background-color: ${({theme}) => theme.black };
		padding: 12px;
	}
	:hover {
		:: after {
			top : 0;
		}
	}
`

export const Item1 = styled(Item)`
	::after {
		content : "Gallery - Search new free image";
	}
	grid-column: 1;
	grid-row: 1 / 3;
`

export const Item2 = styled(Item)`
	::after {
		content : "discoovr - tour and travel";
	}
`

export const Item3  = styled(Item)`
	::after {
		content : "XBOX - Mobile Version";
	}
`

export const Item4 = styled(Item)`
	::after {
		content : "Python Anywhere - Redesign python anywhere page";
	}
	grid-column: 2 / 4;
`

export const Item5 = styled(Item)`
	::after {
		content : "XBOX - Redesign XBOX website page";
	}
	grid-rows: 3 / 4;
	grid-column: 1 / 4;
`