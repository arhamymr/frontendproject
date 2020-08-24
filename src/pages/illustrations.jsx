import React, { useEffect } from 'react';
import { Seo } from "Elements"

// styled
import { Container, ProfilePicture } from "./styled";

// container
import Footer from "Containers/footer"
const App = () => {
  return (
  		<>
	  		<Seo title="Boxinteface: Illustrations"/>
	      <Container>
	        <h1 style={{marginTop: '120px'}}> I Design & Build Websites. </h1>
          <ProfilePicture/>
          <h2> Hi I’m Arham, a Frontend Developer & UI Designer can help your company to creating a beautyfull user-interfaces website and transform it to cutting-edge frontend code.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas purus pellentesque eget eu, fames. Cras sit euismod amet pellentesque et id non. Tempus aenean odio egestas neque. Arcu eleifend ipsum bibendum ultrices et et.</p>
          <Footer/>
        </Container>
      </>
  );
}

export default App;
