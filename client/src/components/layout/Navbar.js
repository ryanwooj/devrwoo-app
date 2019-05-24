import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> Ryan Woo
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Visitors</Link>
        </li>
        <li>
          <Link to='/register'>Get in Touch</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
