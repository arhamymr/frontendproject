import styled from 'styled-components'
import { width, maxSM} from "Utils";

export const Wrapper = styled.div`
	background-color:${({theme}) => theme.black };
	width: 100%;
	margin-top: 100px;
`

export const Container = styled.div`
	margin:0 auto;
	max-width: 1200px;
	display: flex;
	align-items: flex-end;
	padding: 20px 16px 100px 16px;
	color: ${({theme}) => theme.white };
	justify-content: space-between;
	${ maxSM } {
		display: block;
	}
	
`
