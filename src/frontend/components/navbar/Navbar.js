import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <Nav>
        {location.pathname !== '/' && (
          <>
            <Bars />
            <NavMenu>
              <NavLink to='/home' activeStyle>
                HOME
              </NavLink>
              <NavLink to='/classes' activeStyle>
                CLASSES
              </NavLink>
              <NavLink to='/papers' activeStyle>
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
          </>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
