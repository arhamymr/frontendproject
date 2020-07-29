import styled from 'styled-components'
import { width, maxMD, minSM, maxSM} from "Utils"

export const Container = styled.div`
	width: 100%;
	font-size: 17px;
	z-index: 9999;
	background-color: ${({theme}) => theme.white };
`

export const BoxOffline = styled.div`
    width: 100%;
    padding: 16px;
    text-align: center;
    font-size: 15px;
    background-color: ${({theme}) => theme.primary };
    color: ${({theme}) => theme.white };
`

export const NavLogo = styled.div`
	a {
		text-decoration: none;
		color: ${({theme}) => theme.black };
		font-weight: 700;
	}
`

export const Content = styled.div`
	max-width: ${ width.maxWidth };
	display: flex;
	margin: 3% auto;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	${ maxSM } {
		align-items: flex-end;
	}
	transition: all 1s;
	padding: 12px 16px;
	> div {
		display: flex;
		align-items: center;
	}
	ul {
		text-align: right;
	}
	ul > li {

		${({ state }) => state === "/" ?
			"display: none;" : "display: inline-block;"}
		${ maxMD } {
			display: inline-block;
		}
		${ maxSM } {
			display: block;
			align-self: flex-end;
			margin-bottom: 12px;
		}
		margin-left: 32px;
		a {
			color: ${({theme}) => theme.black };
			text-decoration: none;
			:hover {
				color: ${({theme}) => theme.red };
			}
		}
	}
`


export const Urlname = styled.div`
	position: absolute;
	transform: rotate(90deg);
	width: 200px;
	top: 140px;
	left: -80px;
	font-size: 30px;
	color: ${({theme}) => theme.black};
`

export const MenuHamburger = styled.li`
	cursor: pointer;
	> svg {
		${minSM} {
		display: none;
		}
	}
`

export const Menu = styled.li`
`
