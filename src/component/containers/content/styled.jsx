import styled from 'styled-components'
import { width, maxMD, maxSM } from "Utils"

export const Container = styled.div`
	padding: 10px 0;
	width: 100%;
	h2 {
		font-size: 30px;
		letter-spacing: 5px;
		margin-bottom: 12px;
	}
`

export const Content = styled.div`
	max-width: ${width.maxWidth};
	align-items: center;
	padding: 16px;
	margin: 0 auto;
	h2 {
		background-color: ${({theme}) => theme.blue};
		padding: 4px 16px;
		display: inline-block;
		color: ${({theme}) => theme.yellow };
	}
`

export const Img = styled.img`
	margin-right: 12px;
	width: 40px;
`

export const ListContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 16px 16px;
	margin-bottom: 16px;
	> a {
		text-decoration: none;
	}
	${maxMD}{
		grid-template-columns: 1fr 1fr;
	}
	${maxSM}{
		display: block;
		> div {
			margin-left: 0;
			margin-right: 0;
		}
	}
`