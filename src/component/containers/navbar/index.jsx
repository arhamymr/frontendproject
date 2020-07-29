import React, { useState } from 'react';
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
						me.
					</Link>
				</NavLogo>
				<ul>
					{/* <MenuHamburger
					// 	onClick={animationMenu}> <FiMenu/> </MenuHamburger>*/}
					<li>
						<Link to='/blogs'>Blogs</Link>
					</li>
					<li>
						<a target="_blank" href="https://dribbble.com/arhamymr">Dribbble</a>
					</li>
				</ul>
			</Content>
		</Container>
		</>
		</IconContext.Provider>
	)
}

export default Navbar;
