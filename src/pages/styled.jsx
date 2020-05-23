import styled from 'styled-components'
import { maxSM } from "Utils"

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 100px;
  ${maxSM} {
  	padding-top: 0px;	
  }
`

export const Logo = styled.img`
	width: 270px;
	margin: 0 auto;
`

export const Title = styled.h1`
	margin-bottom: 24px;
`

export const Head = styled.div`
	padding-top: 100px;
	text-align: center;
	form {
		max-width: 600px;
		margin: 0 auto;
		display: block;
		input {
			padding: 15px;
			width: 100%;
			border-radius: 4px;
		}
		textarea {
			width: 100%;
			margin-top: 12px;
			margin-bottom: 12px;
		}
		.pell .pell-content {
			text-align: left;
			color: ${({theme}) => theme.black};
			background-color: ${({theme}) => theme.white };
			border: 1px solid ${({theme}) => theme.black };
		}
	}
`