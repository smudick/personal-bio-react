import React, { useState } from 'react';
import 'firebase/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='page-navbar' expand='md'>
        <NavbarBrand href='/'>Sam Mudick</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href="../about">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../projects">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
