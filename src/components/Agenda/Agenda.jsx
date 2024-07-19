import React from 'react';
import './Agenda.css'; // Import your CSS file for styling
import Techvid7 from '../../assets/Techvid7.jpeg';
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import SecureSpot from '../SecureSpot/SecureSpot';

const Agenda = () => {
  return (
    <>
      <div className="agenda-container">
        <div className="agenda-section">
          {/* First vertical part with image */}
          <div className="agenda-vertical-part agenda-image-part">
            <img src={Techvid7} alt="Agenda Image" className="agenda-image" />
            <div className="overlays"></div>
            <div className="agenda-content">
              <h1>Topic</h1>
              <h1>Highlights</h1>
              <button className="agenda-button">View Agenda</button>
            </div>
          </div>

          {/* Second vertical part with cards */}
          <div className="agenda-vertical-part">
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon1} alt="Logo 1" className="logo" />
              </div>
              <div className="side-content">
                <p>Vision 2030 - Emergence Of The Kingdom As A Global Financial Leader.</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon2} alt="Logo 2" className="logo" />
              </div>
              <div className="side-content">
                <p>Payments Today & Tomorrow - The Future Of Digital Payments</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon2} alt="Logo 2" className="logo" />
              </div>
              <div className="side-content">
                <p>Data & Analytics Providing A 360 Overview To Banks & Customers</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon2} alt="Logo 2" className="logo" />
              </div>
              <div className="side-content">
                <p>The Future Of Nbas - Revolutionising The Money Market In Ksa</p>
              </div>
            </div>
          </div>

          {/* Third vertical part with cards */}
          <div className="agenda-vertical-part">
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon3} alt="Logo 3" className="logo" />
              </div>
              <div className="side-content">
                <p>Digital Transformation - The Foundational Platform For Achieving Business Agility</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon4} alt="Logo 4" className="logo" />
              </div>
              <div className="side-content">
                <p>Providing A Next-gen Seamless Banking Customer Experience</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon4} alt="Logo 4" className="logo" />
              </div>
              <div className="side-content">
                <p>'Digital Only' Banks - The Rise Of 'Invisible Banks' For Gen-z Customers</p>
              </div>
            </div>
            <div className="agenda-card with-logo">
              <div className="logo-container">
                <img src={icon4} alt="Logo 4" className="logo" />
              </div>
              <div className="side-content">
                <p>Experiential Banking In Metaverse - The Third World Banking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SecureSpot />
      </div>
    </>
  );
};

export default Agenda;
