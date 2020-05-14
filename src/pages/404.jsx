import import React from 'react';
import { Container } from "./styled";
import { Seo } from "Elements"
import styled from "styled-components";

// image 
import 404 from "Assets/404.png";

const Img = styled.div`
	width: 200px;
	height: 200px;
`

const Index = () => {
  return (
  		<>
	  		<Seo title="Page Not Found"/>
	      <Container className="home">
	      	<Img src={404} alt="page not found"/>
	      </Container>
      </>
  );
}

export default Index;
