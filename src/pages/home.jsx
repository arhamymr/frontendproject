import React  from 'react';
import { Seo, Card, WrapperGallery} from "Elements"

// styled
import { Container, Header } from "./styled";

// container
import Footer from "Containers/footer"

const App = () => {
  return (
  		<>
	  		<Seo title="Boxinteface"/>
      <Container>
        <Header>
          <h1> Design Resource for you </h1>
          <h3> Free for both personal & commercial use.</h3>
        </Header>
        <WrapperGallery>
          <Card image="https://idcloudhost.com/wp-content/uploads/2019/11/URL-min-scaled.jpg" title="test"/>
          <Card image="https://idcloudhost.com/wp-content/uploads/2019/11/URL-min-scaled.jpg" title="test"/>
          <Card image="https://idcloudhost.com/wp-content/uploads/2019/11/URL-min-scaled.jpg" title="test"/>
          <Card image="https://idcloudhost.com/wp-content/uploads/2019/11/URL-min-scaled.jpg" title="test"/>
        </WrapperGallery>
        <Footer />
      </Container>
   
      </>
  );
}

export default App;
