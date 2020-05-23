import React, { useState } from 'react';
import Logo from "Assets/logo.png";
import { 
	MenuHamburger, 
	Menu,
	Container, 
	Content, 
	NavLogo, 
	Urlname, 
	BoxOffline
} from "./styled";

import {
  Link,
  useLocation
} from "react-router-dom";

// Icon
import { colors } from "Utils";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";

// offline
import { Offline } from "react-detect-offline";

const Navbar = () => {
	return (
		<IconContext.Provider value={{ "size": "1.6em", color: colors.black }}>
		<>
		<Container>
			<Offline>
        <BoxOffline>
            Youre offline right now. Check your connection.
        </BoxOffline>
    </Offline>
			<Content>
				<NavLogo>
					<Link to='/'>
						<img src={Logo} alt="logo"/>
					</Link>
				</NavLogo>
				<ul>
					{/* <MenuHamburger 
					// 	onClick={animationMenu}> <FiMenu/> </MenuHamburger>*/}
					<li>
						<Link to='/'>Index</Link>
					</li>
					<li>
						<Link to='/Works'>Works</Link>
					</li>
					<li>
						<Link to='/author'>Author</Link>
					</li>
				</ul>
			</Content>
		</Container>
		</>
		</IconContext.Provider>
	)
}

export default Navbar;