import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <h1 className="logo">MyShop 🛍️</h1>

      {/* زر الهامبورجر */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/help" onClick={closeMenu}>Help</NavLink>
        <NavLink to="/cart" className={({isActive})=> isActive?'active':''}>Cart</NavLink>

      </nav>
    </header>
  );
};

export default Header;
