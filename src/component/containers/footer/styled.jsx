import styled from 'styled-components'
import { width, maxSM} from "Utils";

export const Wrapper = styled.div`
	width: 100%;
	margin-top: 100px;
	margin-bottom: 100px;
`

export const Container = styled.div`
	margin:0 auto;
	max-width: 1200px;
	ul > li {
		text-decoration: none;
		margin-bottom: 12px;
		a {
			color: ${({theme}) => theme.black };
		}
	}
`
