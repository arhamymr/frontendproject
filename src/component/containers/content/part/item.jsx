import React from "react";
import { 
	Card,
	Ellipsis 
} from "Elements";

import DefaultImg from "Assets/default.png";

import {
	ItemContainer,
	Title, 
	DateComp, 
	Desc,
	Img,
	AuthorContainer,
	Author
} from "./styled"

const Index = ({title, sort_desc, date}) => (
		<ItemContainer>
			<Card>
				<Img src={DefaultImg}/>
				<Title>{ title }</Title>
				<Ellipsis clamp={2}><Desc>{ sort_desc }</Desc></Ellipsis>
				<AuthorContainer>
					<Author> Author : arhamymr</Author>
					<DateComp>{date}</DateComp>
				</AuthorContainer>
			</Card>
		</ItemContainer>
	)

export default Index;