import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Fruit-Mart</div>
      <div className="menu">
        <a href="/login">Login</a> <b>|</b> <a href="/cart">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
