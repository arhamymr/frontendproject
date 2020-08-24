import React, { useState } from "react";
import { Card,DetailCard, WrapperDetail, Title } from "./styled";
import { Icons } from "Elements"


const Index = ({children, image, title}) => {
  const [show, setShow] = useState(false)
  return (<>
  <Card
  		onClick={() => setShow(!show)}
  		image={image}>{children}</Card>

  	{show && <WrapperDetail>
  		<DetailCard className="card">
  			<Icons name="close" onClick={() => setShow(!show)}/>
  			<img src={image} alt={title}/>
  			<Title> {title }</Title>
  		</DetailCard>
  	</WrapperDetail> }
  </>)
};

export default Index;
