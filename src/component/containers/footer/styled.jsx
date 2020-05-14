import styled from 'styled-components'
import { width, maxSM} from "Utils";


export const Container = styled.div`
	margin:100px auto;
	width: 100%;
	max-width: 1200px;
	display: flex;
	justify-content: flex-end;
	${ maxSM } {
		justify-content: center;
		padding: 50px;
	}
	
`
