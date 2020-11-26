import React from 'react';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import {
  NavbarBrand,
  Nav,
  NavItem,
  Navbar,
} from 'reactstrap';

export default class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Sam Mudick</NavbarBrand>
          <Nav className='mr-auto justify-content-left' navbar>
            <NavItem>
              <Link className='nav-link' to='/about'>
                About Me
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/skills'>
                Skills
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/projects'>
                Projects
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
