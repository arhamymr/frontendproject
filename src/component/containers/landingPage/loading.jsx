import React from "react"
import { Skeleton } from "Elements"
import styled from "styled-components"

const Wrapper = styled.div`
	border-bottom: 1px solid ${({theme}) => theme.border };
`
const Index = () => (
		<>
		<Wrapper>
			<Skeleton
					width="20%" 
					height="14px"
					marginBottom="12px" 
					marginTop="12px"/>
			<Skeleton 
					width="60%" 
					marginBottom="16px"/>
		</Wrapper>
		<Wrapper>
		<Skeleton
				width="20%" 
				height="14px"
				marginBottom="12px" 
				marginTop="12px"/>
		<Skeleton 
				width="60%" 
				marginBottom="16px"/>
		</Wrapper>
		<Wrapper>
			<Skeleton
					width="20%" 
					height="14px"
					marginBottom="12px" 
					marginTop="12px"/>
			<Skeleton 
					width="60%" 
					marginBottom="16px"/>
		</Wrapper>
		</>
		)

export default Index 