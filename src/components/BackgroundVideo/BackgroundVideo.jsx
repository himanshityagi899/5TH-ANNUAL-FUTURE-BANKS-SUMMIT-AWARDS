import React from 'react';
import Techvid1 from '../../assets/Techvid1.mp4';
import './BackgroundVideo.css';
import Event from '../Event/Event';

const BackgroundVideo = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={Techvid1} autoPlay loop muted />
      <div className="top-left-shape"></div>
      <div className="content">
        <h1 className="title">
        <span className="line with-image">5TH ANNUAL</span><br />
          <span className="line">FUTURE BANKS</span><br />
          <span className="line">SUMMIT & AWARDS</span><br />
          <span className="line">KSA 2024</span>
        </h1>
        <br /><br />
        <h3 className="subtitle">Digital Innovations Transforming The Kingdom’s Banking Landscape</h3>
        <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2024/06/Rajdhani.jpg" alt="Decoration" className="below-subtitle-image" />
        <div className="buttons">
          <button className="registration-btn">Registration</button>
          <button className="nomination-btn">Awards Nomination</button>
        </div>
      </div>
      <br />
      <br />
      <Event />
    </div>
  );
}

export default BackgroundVideo;
