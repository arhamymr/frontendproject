import React from 'react';
import { Container } from "./styled";
import { Seo } from "Elements"

//part
import Blogs from "Containers/blogs";

const App = () => {
  return (
  		<>
	  		<Seo title="Boxinteface: Blogs"/>
	      <Container>
	        <Blogs />
	      </Container>
      </>
  );
}

export default App;
