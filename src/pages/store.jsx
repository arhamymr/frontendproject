import React from 'react';
//part 
import Footer from "Containers/footer";
import Store from "Containers/store";
import { 
	Container, 
} from "./styled";

const App = () => {
  return (
    <Container>
      <Store/>
    	<Footer/>
    </Container>
  );
}

export default App;
