import React, { useState, useEffect } from "react"
import { Input, Skeleton, Icons, Label } from "Elements"
import { SearchBox, NotFound, SearchResult, Title, Close } from "./styled"
import { Link } from "react-router-dom"

// loading
import Loading from "./loading"

import { API_SEARCH_POST } from "Config/api"

//img
import notfound from "Assets/try.png";

const Index = ({isSearching}) => {
	const [query, setQuery] = useState("")
	const [search, setSearch] = useState(null)
	const [searching, setSearching] = useState(false);
	
	const handleSearch = () => {
		setSearching(true)
		fetch(API_SEARCH_POST(query))
	  .then(response => response.json())
	  .then(json => {
	  	setSearch(json)
	  })
	  .catch( () => setSearching(false))
	}

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSearch()
		}
	} 

	useEffect(() => {
		isSearching(searching)
	}, [searching])
	
	return (
		<>
		<SearchBox className="expand">
			<Input type="text" onKeyDown={handleKeyDown} onChange={e => setQuery(e.target.value)}placeholder="Search articles" />
			<Icons name="search" onClick={handleSearch}/>
		</SearchBox>
		{
			searching &&
			<SearchResult>
			<p> Result : </p> 
			<Close onClick={() => setSearching(false)}>
				<p> close </p>
				<Icons name="close"/>
			</Close>
			{ searching && !search && <Loading/>}
			{ search && search.items === undefined && 
				<NotFound>
					<img src={notfound} alt="image" />
					<p> Search not found </p> 
				</NotFound>
			}
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
							{
								item.labels && item.labels.map((i,index) => (
									<Label key={index}> {i} </Label>
								))
							}
						</li> 
					)
				})
			}
			</SearchResult>
		}
		
		</>
	)
}

export default Index 