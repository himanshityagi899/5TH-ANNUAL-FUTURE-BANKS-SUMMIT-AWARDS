import React from 'react';
import './SecureSpot.css'; // Import the CSS file
import Techvid8 from '../../assets/Techvid8.jpeg'; // Path to your image
import HorizontalCard from '../HorizontalCard/HorizontalCard'; // Import the HorizontalCard component
import WhyAttend from '../WhyAttend/WhyAttend';

const SecureSpot = () => {
  return (
    <>
      <div className="secure-spot-container">
        <img src={Techvid8} alt="Secure Spot" className="secure-spot-image" />
        <div className="secure-spot-overlay"></div>
        <div className="secure-spot-content">
          <h1 className="secure-spot-title">Secure Your Spot</h1>
          <p className="secure-spot-description">
            Register now to secure your spot at the 5th Annual Future Banks Summit & Awards 2024 in Riyadh, KSA on September 9th and 10th, 2024. Join 200+ banking and technology leaders for insights, networking, and innovation. Click below to register!
          </p>
          <button className="secure-spot-button">Registration</button>
        </div>
        <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2024/03/Top-Left-Shape.png" alt="Decoration" className="decoration-bottom-left" />
        <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2024/03/Top-Left-Shape.png" alt="Decoration" className="decoration-top-right" />
        <HorizontalCard /> {/* Add the HorizontalCard component */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <WhyAttend />
    </>
  );
};

export default SecureSpot;
