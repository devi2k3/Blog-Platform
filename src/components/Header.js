import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>My Personal Blog</h1>
    <nav className='head'>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/about">About</Link>
    </nav>
  </header>
);

export default Header;
