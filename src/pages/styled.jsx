import styled from 'styled-components'
import { width, maxSM } from "Utils"

// image
import Profil from "Assets/profil.png";

export const Container = styled.div`
  max-width:  ${ width.maxWidth };
  margin: 0 auto;
  ${maxSM} {
  	padding-top: 0px;
  }
  h1 {
    font-size: 69px;
    font-weight: 600;
  }
`

export const Logo = styled.img`
	width: 270px;
	margin: 0 auto;
`

export const Title = styled.h1`
	margin-bottom: 24px;
`

export const ProfilePicture = styled.div`
  background-image: url(${Profil});
  background-color: #2d2d2d;
  width: 100%;
  margin-top: 220px;
  margin-bottom: 50px;
  height: 400px;
  background-size: cover;
`

export const Header = styled.div`
	padding: 200px 0;
	text-align: center;
`

