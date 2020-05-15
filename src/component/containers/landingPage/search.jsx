import React, { useState} from "react"
import { Input, Skeleton, Button } from "Elements"
import { SearchBox, SearchResult, Title} from "./styled"
import { Link } from "react-router-dom"

import { API_SEARCH_POST } from "Config/api"

const Index = () => {
	const [query, setQuery] = useState("")
	const [search, setSearch] = useState(null)
	
	const handleSearch = () => {
		alert("hit")
		fetch(API_SEARCH_POST(query))
	  .then(response => response.json())
	  .then(json => setSearch(json))
	}

	return (
		<>
		<SearchBox>
			<Input type="text" onChange={e => setQuery(e.target.value)}placeholder="Search articles" />
			<Button onClick={handleSearch}> Search </Button>
		</SearchBox>
		<SearchResult>
		{ search === null ? 
				null
			:
			search && search.items && search.items.map( item => {
				let d = new Date(item.published);
				return (
					<li key={item.id}> 
						<p>{d.toDateString()}</p>
						<Link to={`/post/${item.id}`}>
								<Title>{item.title}</Title>
						</Link>
					</li> 
				)
			})
		}
		</SearchResult>
		</>
	)
}

export default Index 