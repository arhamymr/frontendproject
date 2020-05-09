import React from 'react';
import { Link } from "react-router-dom";

import Item from "Containers/content/part/item";
import { 
	Container, 
	Content,
	ItemContainer
} from "./styled";

const Index = ({ img, title, menu }) => {
	return (
		<Container>
			<Content>
				<h2> List Article </h2>
				<ItemContainer>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
				</ItemContainer>

				<ItemContainer>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
				</ItemContainer>

				<ItemContainer>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
				</ItemContainer>

				<ItemContainer>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
				</ItemContainer>

				<ItemContainer>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
				</ItemContainer>

				<ItemContainer>
					<Link to="/post/html101">
						<Item 
							title="HTML 101" 
							date="12-januari-2019"
							sort_desc="Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini Desc penjelasan singkat disini"
						/>
					</Link>
				</ItemContainer>

				
			</Content>
		</Container>
	)
}

export default Index;