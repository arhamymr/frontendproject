import React, { useState } from 'react';
import Logo from "Assets/logo.png";
import { 
	MenuHamburger, 
	Menu,
	Container, 
	Content, 
	NavLogo, 
	Urlname 
} from "./styled";

import {
  Link,
  useLocation
} from "react-router-dom";

// Icon
import { colors } from "Utils";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";

const Navbar = () => {
	return (
		<IconContext.Provider value={{ "size": "1.6em", color: colors.black }}>
		<>
		<Container>
			<Content>
				<NavLogo>
					<Link to='/'>
						<img src={Logo} alt="logo"/>
					</Link>
				</NavLogo>
				<ul>
					<MenuHamburger> <FiMenu/> </MenuHamburger>
					<Menu>
						<Link to='/'>Index</Link>
					</Menu>
					<Menu>
						<Link to='/Works'>Works</Link>
					</Menu>
					<Menu>
						<Link to='/author'>Author</Link>
					</Menu>
				</ul>
			</Content>
		</Container>
		</>
		</IconContext.Provider>
	)
}

export default Navbar;