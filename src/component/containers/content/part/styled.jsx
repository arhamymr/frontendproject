import styled from 'styled-components'

export const Title = styled.h3`
	font-size: 25px;
	margin-top: 12px;
	letter-spacing: 2px;
`

export const DateComp = styled.p`
	font-size: 12px;
	margin-bottom: 5px;
`

export const Author = styled.div`
	font-size: 12px;
`

export const AuthorContainer = styled.div`
	display: flex;
	margin-top: 12px;
	justify-content: space-between;
`

export const Desc = styled.p`
	font-size: 16px;
` 

export const Img = styled.div`
	background-image: url(${props => props.src});
	height: 200px;
	margin: -10px -16px 0 -16px;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;

`

export const ItemContainer = styled.div`
	cursor: pointer;
`