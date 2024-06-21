import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // New function to navigate without toggling the menu
  const navigateWithoutToggle = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
        <h1>Bilel Project</h1>
      </div>

      <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
        </ul>
      </div>

      <div className="cart-profile">
        <Link to="/signup" className="sign-in-btn" onClick={navigateWithoutToggle}>Sign Up</Link>
        <Link to="/login" className="login-btn" onClick={navigateWithoutToggle}>Login</Link>
      </div>

      <div className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
