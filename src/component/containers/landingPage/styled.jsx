import styled from 'styled-components'
import { maxMD, maxSM} from "Utils";

export const Wrapper = styled.div`
	width: 100%;
	max-width: 800px;
	padding: 16px;
	margin: 0 auto;
	color:  ${({theme}) => theme.black };
	h1 {
			font-size: 60px;	
			margin-bottom: 20px;
	}
`

export const Content = styled.div`
	a {
		text-decoration: none;
		color: ${({theme}) => theme.black };
	}
`

export const Title = styled.p`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 12px;
	:hover {
		color: ${({theme}) => theme.primary };
	}
`

export const SearchBox = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 0;
	margin-bottom: 24px;
	input {
		margin-right: 12px;
	}
`

export const SearchResult = styled.div`
	border: 1px solid ${({ theme }) => theme.primary };
	padding: 16px;
`

export const SearchIcon = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	p {
		margin-left: 12px;
		color: ${({theme}) => theme.fontSoft};
	}
`