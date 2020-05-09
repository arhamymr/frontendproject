import styled from 'styled-components'
import { width, maxSM} from "Utils";


export const Container = styled.div`
	margin-top:100px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	${ maxSM } {
		justify-content: center;
		padding: 50px;
	}
	padding: 100px;
`
