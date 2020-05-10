import React from 'react';
//part 
import Footer from "Containers/footer";
import Works from "Containers/works";
import { Seo } from "Elements";

// cursor 
import { Cursor } from "Elements";

import { 
	Container,
} from "./styled";

const App = () => {
  return (
  		<>
	  		<Seo title="Works" />
	      <Container>
	      	<Cursor/>
	      	<Works/>
	      	<Footer/>
	      </Container>
      </>
  );
}

export default App;
