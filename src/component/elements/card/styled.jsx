import styled from "styled-components"

export const Card = styled.div`
	border-radius: 8px;
  padding: 10px 16px;
  min-height: 200px;
  margin-bottom: 12px;
  background: url('${({image}) => image }') no-repeat;
  color: ${({theme}) => theme.white };
  background-size: cover;
  width: 100%;
  max-width: 500px;
  position: relative;
  cursor: pointer;
  height: 400px;
  p {
  	background-color: rgba(0,0,0,.2);
  	padding: 8px 16px;
  	font-size: 25px;
  }
`

export const WrapperDetail = styled.div`
  background-color: rgba(0,0,0,.25);
  width: 100vw;
  position: fixed;
  z-index: 99999999;
  height: 100vh;
  top: 0;
  left: 0;
`

export const Title = styled.p`


`

export const DetailCard = styled.div`
  background-color: ${({theme}) => theme.white };
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 8px;
  padding:24px;
  i {
    position: absolute;
    right: 0;
    top: 0;
  }
  img {
    max-width: 400px;
  }
`