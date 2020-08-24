import React, { useState } from 'react';
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
						boxinterface
					</Link>
				</NavLogo>
				<ul>
					<li>
						<Link to='/blogs'>Blogs</Link>
					</li>
					<li>
						<Link to='/3dModels'>3D Models</Link>
					</li>
					<li>
						<Link to='/Illustrations'>Illustrations</Link>
					</li>
					<li>
						<Link to='/me'>Me</Link>
					</li>
				</ul>
			</Content>
		</Container>
		</>
		</IconContext.Provider>
	)
}

export default Navbar;
