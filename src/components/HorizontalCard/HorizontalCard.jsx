import React from 'react';
import './HorizontalCard.css'; // Import the CSS file


const HorizontalCard = () => {
  return (
    
    <div className="horizontal-card">
      <div className="horizontal-card-item">
        <h2>30+</h2>
        <p>Speakers</p>
      </div>
      <div className="horizontal-card-item">
        <h2>200+</h2>
        <p>Delegates</p>
      </div>
      <div className="horizontal-card-item">
        <h2>97%</h2>
        <p>Satisfaction</p>
      </div>
      <div className="horizontal-card-item">
        <h2>10+</h2>
        <p>Hours Of Networking</p>
      </div>
    </div>
    
    
  );
};

export default HorizontalCard;
