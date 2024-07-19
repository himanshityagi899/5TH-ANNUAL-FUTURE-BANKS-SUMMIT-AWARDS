// src/components/NextSection/NextSection.jsx
// src/components/Event/Event.jsx
import React from 'react';
import ReactPlayer from 'react-player';
import './Event.css';
import CEO from '../../assets/CEO.jpeg';
import Para from "../Para/Para";

const Event = () => {
  return (
    <div>
    <div className="event-section">
      <div className="image-wrapper">
        <img src={CEO} alt="Event Image" className="event-image" />
        <div className="video-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=HjkTUPJPUsY&t=2s"
            width="100%"
            height="100%"
            className="video-player"
            config={{
              youtube: {
                playerVars: { start: 2 } // Start the video at 2 seconds
              }
            }}
          />
        </div>
      </div>
      <div className="event-content">
        <h1>Event Overview</h1>
        <p>The banking industry worldwide is undergoing phenomenal change, giving the banks an opportunity to relook into their existing business models and take a huge leap towards the future. The shift in consumers' digital experience, adoption of next-gen technologies, transformation of customer service to customer engagement, mobile workforce with a need to 'right-size' the branch network are all opportunities for regional banks to seize and accelerate the shift to digital.</p>
        
      </div>
      
    

     
    </div>

    <Para/>
    </div>
  );
};

export default Event;
