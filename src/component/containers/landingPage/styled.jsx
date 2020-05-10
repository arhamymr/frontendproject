import styled from 'styled-components'
import { maxMD, maxSM} from "Utils";

export const Wrapper = styled.div`
	width: 100%;
	max-width: 800px;
	padding: 16px;
	margin: 0 auto;
	h1 {
			font-size: 60px;	
			margin-bottom: 20px;
	}
`

export const Content = styled.div`
	columns: 3;
	column-gap: 15px;
`