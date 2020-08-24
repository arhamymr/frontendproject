import styled from 'styled-components'
import { width, maxMD, maxSM} from "Utils";


export const Wrapper = styled.div`
	width: 100%;
	max-width: ${width.maxWidth};
	margin: 0 auto;
	color:  ${({theme}) => theme.black };
	
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

export const Header = styled.div`
	padding: 200px 0;
	text-align: center;
	h1 {
    font-size: 69px;
    font-weight: 600;
  }
`
