import React from 'react';
import { Container } from "./styled";
import { Seo } from "Elements"
//part 
import LandingPage from "Containers/landingPage";

const App = () => {
  return (
  		<>
	  		<Seo title="Frontend Project"/>
	      <Container>
	        <LandingPage />
	      </Container>
      </>
  );
}

export default App;
