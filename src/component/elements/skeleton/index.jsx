import styled ,{ css, keyframes } from "styled-components";

const anim = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .2;
  }
  100% {
    opacity: 1;
  }
`;

const Skeleton = styled.div`
  background: #e0e0e0;
  height: 20px;
  width: 100%;
  border-radius: 3px;
  animation: ${anim} 2s linear;
  animation-iteration-count: infinite;
  ${ (props) => css({...props})}
`;

export default Skeleton;

