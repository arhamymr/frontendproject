import React from 'react';
import { Seo, Button} from "Elements"
import styled from "styled-components";
import { Link } from "react-router-dom";

// image
import Notfound from "Assets/notfound.png";

const Container = styled.div`
		text-align: center;
		padding-top: 140px;
		a {
			margin-top: 30px;
			display: block;
		}
`
const Img = styled.img`
	width: 200px;
`

const Index = () => {
  return (
  		<>
	  		<Seo title="Page Not Found"/>
	      <Container>
	      	<Img src={Notfound} alt="page not found"/>
	      	<Link to="/">
	      			<Button> Go to Home </Button>
	      	</Link>
	      </Container>
      </>
  );
}

export default Index;
