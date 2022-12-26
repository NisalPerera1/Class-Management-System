import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

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
			YOUR CLASSES
		</NavLink>
		<NavLink to='/feereports' activeStyle>
			PAYMENTS
		</NavLink>
		<NavLink to='/students' activeStyle>
			STUDENTS
		</NavLink>
		<NavLink to='/about' activeStyle>
			ABOUT
		</NavLink>
		
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
