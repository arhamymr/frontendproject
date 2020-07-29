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
    font-size: 96px;
    font-weight: 600;
  }
  h2 {
    font-size: 44px;
    margin-bottom: 50px;
  }
  p {
    font-size: 25px;
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
