import React, { useState } from "react";
import { Card,DetailCard, WrapperDetail, Title } from "./styled";
import gsap from "gsap"
import { Icons } from "Elements"

const expandAnimation = () => {
	gsap.to(".card", 1, 
		{top: 1})
}

const Index = ({children, image, title}) => {
  const [show, setShow] = useState(false)
  return (<>
  <Card   
  		onClick={() => setShow(!show)}
  		image={image}>{children}</Card>
  		
  	{show && <WrapperDetail>
  		<DetailCard className="card">
  			<Icons name="close" onClick={() => setShow(!show)}/>
  			<img src={image} alt="image detail"/>
  			<Title> {title }</Title>
  		</DetailCard>
  	</WrapperDetail> }
  </>)
};

export default Index;
