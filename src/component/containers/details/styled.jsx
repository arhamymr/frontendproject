import styled from 'styled-components';
import { width } from "Utils";
import DefaultImg from "Assets/default.png";

export const Container = styled.div`
	width: 100%;
`

export const Content = styled.div`
	max-width: ${ width.articleWidth };
	margin: 0 auto;
	position: relative;
	padding: 16px;
	h2 {
		margin-bottom: 24px;
		background-color: ${({theme}) => theme.blue };
		color: ${({theme}) => theme.yellow };
		display: inline-block;
		padding: 4px 16px;
	}
`

export const Cover = styled.div`
	background: url(${({img}) => img || DefaultImg });
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 400px;
	margin-top: 100px;
`

export const Title = styled.h1`
	font-size: 45px;
	font-weight: normal;
	margin-top: 50px;
`

export const Published = styled.small`
	font-size: 13px;
	display: block;
	margin-bottom: 50px;
`

export const Article =  styled.div`
	font-size: 18px;
	line-height: 150%;
`

export const ItemContainer = styled.div`
	margin-bottom: 12px;
	a {
		text-decoration: none;
	}
`

export const Share = styled.div`
	position: sticky;
	top: 100px;
	float: left;
	margin-left: -60px;
	display: flex;
	flex-direction: column;
	align-items: space-around;
	height: 100px;
`