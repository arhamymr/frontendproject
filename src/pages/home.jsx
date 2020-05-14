import React, { useEffect } from 'react';
import { Container } from "./styled";
import { Seo } from "Elements"

//part 
import LandingPage from "Containers/landingPage";

// cursor 
import { Cursor } from "Elements";


const App = () => {
  return (
  		<>
	  		<Seo title="Frontend Project"/>
	      <Container>
	      	<Cursor/>
	        <LandingPage />
	      </Container>
      </>
  );
}

export default App;
