import styled from "styled-components"
import { maxSM } from "Utils"

export const Container = styled.div`
	padding: 16px;
	justify-content: center;
	max-width: 1200px;
	margin: 50px auto 0 auto;
	h1 {
		font-size: 60px;
		margin-bottom: 50px;
		${maxSM} {
			font-size: 40px;
		}
	}
`

export const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px 24px;
	${ maxSM } {
		display: block;	
	}
`