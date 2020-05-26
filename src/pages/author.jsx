import React from 'react';
import { Container } from "./styled";
import { Social, Button } from "Elements";
import { Seo } from "Elements";

//part 
import Footer from "Containers/footer";

// assets
import Profil from "Assets/profil.png";

// styled 
import styled from 'styled-components';
import { width, maxSM } from 'Utils';

// cursor
import { Cursor } from "Elements"


const Content = styled.div`
	max-width: 550px;
	margin: 40px auto 0 auto;
  padding: 16px;
  color:  ${({theme}) => theme.black };
  h1 {
    font-size: 60px;
    margin-bottom: 16px;
    ${maxSM} {
      font-size: 40px;
    }
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
  height: 260px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({image}) => image});
`
  
const App = () => {
  return (
      <>
      <Seo title="Author - Frontend Project" />
      <Container>
        <Cursor/>
  			<Content>
          <h1> 
              Hey, i'm Arham <br/>
              welcome to <br/>
              frontend project
          </h1>        
          <p>
            I’m a Frontend Developer and UI Designer
            can help your company to creating a beautyfull 
            user-interfaces website and transform it to 
            cutting-edge and hight-quality frontend code. 
          </p>
          <ProfilPic image={Profil} />
          <p><strong>Location</strong></p>
          <p> Polewali Mandar, <br/>
              Indonesia
          </p>
          <p><strong>What My Focus</strong></p>
          <p> Frontend Developer </p>
          <p> - React.js <br/>
              - Performance & Accessibilty <br/>
              - Animation </p>
          <p> More </p>
          <p> - UI Design <br/>
              - Design Grafis </p>
          <p><strong>Experience</strong></p>
          <p> +{ new Date().getFullYear() - 2019} Years </p>
          <a target="_blank" href="mailto:arhamymr@gmail.com">
            <Button> Get In Touch </Button>
          </a>  
          <p> Professional profile can find on 
            <a target="_blank" href="https://www.linkedin.com/in/arhamymrr"> linkedin</a>
          </p>
        </Content>
        <Footer/>
      </Container>
      </>
  );
}

export default App;