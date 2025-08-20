import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Login from "./Login";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedin, setLoggedin] = useState();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setLoggedin(true);
    }
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Fruit-Mart</div>
        <div className="menu">
          {loggedin ? (
            <span>My Account</span>
          ) : (
            <span onClick={() => setShowLogin(true)}>Login</span>
          )}
          <b>|</b>
          <a href="/cart">Cart</a>
        </div>
      </nav>
      {showLogin && <Login onClose={() => {setLoggedin(true); setShowLogin(false);}} />}
    </div>
  );
};

export default Navbar;
