import React, { useState} from 'react';


const Navbar = ({ onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
            <div className="navbar-brand">
      
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
      
        <a href="#home" onClick={() => { onSectionClick('home'); setIsMenuOpen(false); }}>Home</a>
        
        <a href="#accommodation" onClick={() => { onSectionClick('accommodation'); setIsMenuOpen(false); }}>Accommodation</a>
        <a href="#places" onClick={() => { onSectionClick('places'); setIsMenuOpen(false); }}>Places</a>
        <a href="#restaurants" onClick={() => { onSectionClick('restaurants'); setIsMenuOpen(false); }}>Restaurants</a>
        <a href="#contact" onClick={() => { onSectionClick('contact'); setIsMenuOpen(false); }}>Contact</a>
      </div>
    </nav>
  )
};

export default Navbar;
