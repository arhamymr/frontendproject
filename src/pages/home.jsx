import React, { useEffect } from 'react';
import { Container } from "./styled";
import { Seo } from "Elements"

//part 
import LandingPage from "Containers/landingPage";

// cursor 
import { Cursor } from "Elements";

// animation
import { animationHome } from "Animations"

const App = () => {
	useEffect(() => {
		animationHome()
	}, [])

  return (
  		<>
	  		<Seo title="Frontend Project"/>
	      <Container className="home">
	      	<Cursor/>
	        <LandingPage />
	      </Container>
      </>
  );
}

export default App;
