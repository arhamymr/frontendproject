import styled from "styled-components"

export const Card = styled.div`
	border-radius: 8px;
  padding: 10px 16px;
  overflow: hidden;
  border: 3px solid ${({theme}) => theme.red}
`