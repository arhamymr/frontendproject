import React from 'react';
import { Container } from "./styled";
import { Social, Button } from "Elements";
import { Seo } from "Elements";

//part 
import Footer from "Containers/footer";

// assets
import Profil from "Assets/profil.jpg";

// styled 
import styled from 'styled-components';
import { width } from 'Utils';


const Content = styled.div`
	max-width: 450px;
	margin: 40px auto 0 auto;
  color:  ${({theme}) => theme.black };
  h1 {
    font-size: 40px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 8px;
  }
  button {
    margin: 12px 0;
  }
`

const ProfilPic =  styled.div`
  width: 100%;
  height: 160px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({image}) => image});
`

const App = () => {
  return (
      <>
      <Seo title="Author - Frontend Project" />
      <Container>
  			<Content>
          <h1> 
              Hey, i'm Arham <br/>
              Welcome to <br/>
              frontend project
          </h1>        
          <p>
            I’m a Frontend Developer and UI Designer <br/>
            can help your company to creating a beautyfull <br /> 
            user-interfaces website and transform it to <br />
            cutting-edge and hight-quality frontend code. 
          </p>
          <ProfilPic image={Profil} />
          <p><strong>Location</strong></p>
          <p> Polewali Mandar, <br/>
              Indonesia
          </p>
          <p><strong>Experience</strong></p>
          <p> +1 Years </p>
          <Button> Get In Touch </Button>
          <p> Professional profile can find on 
            <a href="https://www.linkedin.com/in/arhamymrr"> linkedin</a>
          </p>
        </Content>
        <Footer/>
      </Container>
      </>
  );
}

export default App;