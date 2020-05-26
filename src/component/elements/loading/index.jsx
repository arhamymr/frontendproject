import React from "react";
import styled from "styled-components";
import gsap from "gsap"
import { colors } from "Utils"

const Loading = styled.div`
	text-align: center;
	background-color: ${ colors.black };
	height: 100vh;
	width: 100vw;
	opacity: .9;
	position: absolute;
	z-index: 999999999;
	svg {
		margin-right: 12px;
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.loading {
		scale: 2;
		fill: ${ colors.white };
		stroke: ${ colors.white };
		stroke-dasharray: 400;
	  stroke-dashoffset: 400;
	  fill-opacity: 0;
	}
`

const Index = () => {
  
  React.useEffect(() => {
  	const tl = gsap.timeline()
  	tl.fromTo(".loading", 2.5, {"stroke-dasharray": 200 }, { "stroke-dashoffset": 0 , "stroke-dasharray" : 400 })
  	tl.to(".loading", .5, { "fill-opacity" : 1 })
  	tl.to(".wrapper-loading", 1, { opacity: 0 })
  }, [])

  return (
    <Loading className="wrapper-loading">
  	<svg  width="100px" height="110px" >
			<g>
				<path className="loading" d="M47 7c-26,0 -47,21 -47,47 0,26 21,47 47,47 26,-1 47,-22 47,-48 0,-12 -4,-23 -12,-31l0 -22 -21 8c-5,-1 -9,-2 -14,-1l0 0zm4 25c0,0 1,0 2,0l-3 10 14 1c-7,21 -12,33 -26,32l8 -22 -16 0c4,-11 6,-22 21,-21l0 0z"/>
			</g>
		</svg>
    </Loading>
  );
};


export default Index