import React from "react";
import { 
	FaGithub,
	FaTwitter,
	FaInstagram,
	FaCodepen,
	FaLinkedinIn,
} from "react-icons/fa";

import { IconContext } from "react-icons";
import {
	Icon
} from "./styled";
import { colors } from "Utils"

const Index = () => (
	<IconContext.Provider value={{ "size": "1.6em", color: colors.black }}>
	  <Icon>
	  	<a target="_blank" href="https://www.github.com/arhamymr"><FaGithub/></a>
	  	<a target="_blank" href="https://www.twitter.com/arhamymr"><FaTwitter/></a>
	  	<a target="_blank" href="https://www.instagram.com/arhamymr/"><FaInstagram/></a>
	  	<a target="_blank" href="https://www.codepen.com/arhamymr"><FaCodepen/></a>
	  	<a target="_blank" href="https://www.linkedin.com/in/arhamymrr"><FaLinkedinIn/></a>
	  </Icon>
  </IconContext.Provider>
);

export default Index;
