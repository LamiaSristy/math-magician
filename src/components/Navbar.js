import React from 'react';
import navbarStyles from '../styles/navbar.module.css';

const Navbar = () => (
  <div className={navbarStyles.topnav}>
    <div>
      <a className={navbarStyles['brand-logo']} href="/home">My Math Magicians!!</a>
    </div>
    <div className={navbarStyles['navbar-nav']}>
      <a href="/">Home</a>
      <a href="/calculator">Calculator</a>
      <a href="/quotes">Quote</a>
    </div>

  </div>
);

export default Navbar;
