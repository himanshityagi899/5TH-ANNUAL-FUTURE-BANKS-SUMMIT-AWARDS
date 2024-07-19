
import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file
import FutureBanks from '../../assets/FutureBanks.png'; // Path to your logo
import Techvid12 from '../../assets/Techvid12.png'; // Path to the EN flag


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <img src={FutureBanks} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <a href="#schedule" className="navlink">Schedule</a>
        <a href="#expert-speakers" className="navlink">Expert Speakers</a>
        <a href="#awards" className="navlink">Awards</a>
        <a href="#partners" className="navlink">Partners</a>
        <a href="#gallery" className="navlink">Gallery</a>
        <a href="#contactus" className="navlink">Contact Us +</a>
      </div>
      <div className="navbar-right">
        <img src={Techvid12} alt="EN" className="flag" />
        {/* <img src={arFlag} alt="AR" className="flag" /> */}
        <a href="#registration" className="navlink register-button">Registration</a>
      </div>
    </nav>
  );
};

export default Navbar;
