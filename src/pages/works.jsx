import React from 'react';
//part 
import Footer from "Containers/footer";
import Works from "Containers/works";
import { Seo } from "Elements";

import { 
	Container,
} from "./styled";

const App = () => {
  return (
  		<>
	  		<Seo title="Works" />
	      <Container>
	      	<Works/>
	      	<Footer/>
	      </Container>
      </>
  );
}

export default App;
