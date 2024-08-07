// ./Components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="header">
      <div className="nav-left">
        <nav className={`nav ${mobileMenu ? 'active' : ''}`}>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#infrastructure">Infrastructure</a></li>
          </ul>
        </nav>
      </div>
      <div className="logo">
        <img src="Krosslogo" alt="kross Logo" />
      </div>
      <div className="nav-right">
        <nav className={`nav ${mobileMenu ? 'active' : ''}`}>
          <ul>
            <li><a href="#kross-products">Kross Products</a></li>
            <li><a href="#collections">Collections</a></li>
            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#more">More</a>
              {dropdown && (
                <ul className="dropdown-menu">
                  <li><a href="#option1">Option 1</a></li>
                  <li><a href="#option2">Option 2</a></li>
                  <li><a href="#option3">Option 3</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
