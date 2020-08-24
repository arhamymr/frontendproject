import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px 12px;
`

const Index = ({children}) => {
	return (
		<Wrapper>
      {children}
    </Wrapper>
	)
}

export default Index
