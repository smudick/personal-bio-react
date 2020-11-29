import React from 'react';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export default class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div class='nav-wrapper page-navbar'>
            <Link style={{ textDecoration: 'none' }} to='/' class='brand-logo'>
              Sam Mudick
            </Link>
            <ul id='nav-mobile' class='right hide-on-med-and-down'>
              <li>
                <Link style={{ textDecoration: 'none' }} to='/about'>About Me</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none' }} to='/skills'>Skills</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none' }} to='/projects'>Projects</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
