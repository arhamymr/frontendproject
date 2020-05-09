import React from 'react';
import { Button } from "Elements";
import { Container, Content, ListContainer } from "./styled";
import Item from "./part/item";
import { Link } from "react-router-dom";

const Index = ({title}) => {
	return (
		<Container>
			<Content>
				<h2>{title}</h2>
				<ListContainer>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
					
				</ListContainer>
				<Button> Lebih Banyak </Button>
			</Content>
		</Container>
	)
}

export default Index;