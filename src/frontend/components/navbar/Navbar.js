import React from 'react';


import {Nav,NavLink,Bars,NavMenu} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/' activeStyle>
			HOME
		</NavLink>
		<NavLink to='/classes' activeStyle>
			CLASSES
		</NavLink><NavLink to='/papers' activeStyle>
			PAPERS
		</NavLink>
		
		<NavLink to='/students' activeStyle>
			STUDENTS
		</NavLink>
		<NavLink to='/about' activeStyle>
			ABOUT
		</NavLink>
		<NavLink to='/contact' activeStyle>
			CONTACT ME
		</NavLink>
		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
