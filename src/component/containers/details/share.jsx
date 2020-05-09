import React from "react";
import { 
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

import { IconContext } from "react-icons";
import { Share } from "./styled";
import { colors } from "Utils"

const Index = () => (
	<IconContext.Provider value={{ "size": "1.6em", color: colors.red }}>
	  <Share>
	 		<a href="google.com"><FaTwitter/></a>
	  	<a href="google.com"><FaTwitter/></a>
	  	<a href="google.com"><FaTwitter/></a>
	  	<a href="www.linkedin.com/in/arhamymrr"><FaLinkedinIn/></a>
	  </Share>
  </IconContext.Provider>
);

export default Index;
