import styled from 'styled-components'
import { width, maxMD, minSM, maxSM} from "Utils"

export const Container = styled.div`
	width: 100%;
	font-size: 17px;
	padding-top: 20px;
`

export const NavLogo = styled.div`
	a {
		text-decoration: none;
		color: ${({theme}) => theme.black };
	}
	img {
		width: 40px;
	}
`

export const Content = styled.div`
	max-width: ${ width.maxWidth };
	margin: 0 auto;
	width: 100%;
	justify-content: space-between;
	${({ state }) => state == "/" ? 
	"align-items: flex-start;" :
	"align-items: center;"
	}
	${ maxSM } {
		align-items: flex-start;
	}
	display: flex;
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

export const Img = styled.img`
	margin-right: 16px;
	width: 160px;
`

export const Urlname = styled.div`
	position: absolute;
	transform: rotate(90deg);
	width: 200px;
	top: 140px;
	left: -80px;
	font-size: 30px;
	color: ${({theme}) => theme.backgroundSoft};
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