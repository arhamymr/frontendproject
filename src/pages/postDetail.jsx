import React from 'react';
//part 
import Footer from "Containers/footer";
import Details from "Containers/details";
import { 
	Container, 
} from "./styled";

const App = () => {
  return (
    <Container>
      <Details/>
    	<Footer/>
    </Container>
  );
}

export default App;
