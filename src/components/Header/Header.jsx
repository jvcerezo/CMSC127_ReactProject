import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="./logo.png" className="logo-2" />
      </div>
      <p className='labtica-text'>LabTICA</p>
      <nav className="navigation">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Test</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Help</a></li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
};

export default Header;
