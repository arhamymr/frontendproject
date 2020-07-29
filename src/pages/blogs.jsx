import React, { useEffect } from 'react';
import { Container } from "./styled";
import { Seo } from "Elements"

//part
import Blogs from "Containers/blogs";

const App = () => {
  return (
  		<>
	  		<Seo title="Frontend Project"/>
	      <Container>
	        <Blogs />
	      </Container>
      </>
  );
}

export default App;
