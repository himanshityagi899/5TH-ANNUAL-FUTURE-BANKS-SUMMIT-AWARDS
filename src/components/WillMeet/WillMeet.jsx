import React from 'react';
import './WillMeet.css'; // Import your CSS file for styling
import Techvid7 from '../../assets/Techvid7.jpeg';



const WillMeet = () => {
  return (
    <>
      <div className="agenda-container">
        <div className="agenda-section">
          {/* First vertical part with image */}
          <div className="agenda-vertical-part agenda-image-part">
            <img src={Techvid7} alt="Agenda Image" className="agenda-image" />
            <div className="overlays"></div>
            <div className="agenda-content">
              <h1>WHO WILL</h1>
              <h1>YOU MEET?</h1>
              <button className="agenda-button">Expert Speakers</button>
            </div>
          </div>

          {/* Second vertical part with cards */}
          <div className="agenda-vertical-part">
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon1} alt="Logo 1" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>CIOs, CTOs, Heads of Technology</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon2} alt="Logo 2" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>Chief Marketing Officers, Heads of Marketing</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon2} alt="Logo 2" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>Heads of Corporate Banking</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon2} alt="Logo 2" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>Heads of Cards & Payments</p>
              </div>
            </div>
          </div>

          {/* Third vertical part with cards */}
          <div className="agenda-vertical-part">
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon3} alt="Logo 3" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>Chief Digital Officer, Heads of Digital Transformation</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon4} alt="Logo 4" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>Heads of Retail Banking</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon4} alt="Logo 4" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>Heads of Customer Experience</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                {/* <img src={icon4} alt="Logo 4" className="logo" /> */}
              </div>
              <div className="side-content">
                <p>Heads of Governance, Risk & Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default WillMeet;

