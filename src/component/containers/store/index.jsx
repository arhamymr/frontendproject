import React, { useState } from 'react';
import Logo from "Assets/logo.png";
import asset6 from "Assets/asset(6).png"

import { 
	Container, 
	Content
} from "./styled";

import { Card } from "Elements"

const Index = () => {
	return (
		<Container>
			<h1> I created, <br/>
					Maybe you want to buy <br/>
					something from me
			</h1>
			<Content>
				<Card image={asset6}> 
					<p>Title Store</p>
				</Card>
				<Card image={asset6}> 
					<p>Title Store</p>
				</Card>
				<Card image={asset6}> 
					<p>Title Store</p>
				</Card>
				<Card image={asset6}> 
					<p>Title Store</p>
				</Card>
				<Card image={asset6}> 
					<p>Title Store</p>
				</Card>
				<Card image={asset6}> 
					<p>Title Store</p>
				</Card>
			</Content>
		</Container>
	)
}

export default Index;