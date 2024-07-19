import React from 'react';
import './WhyAttend.css'; // Import the CSS file
import Techvid10 from '../../assets/Techvid10.jpeg'; // Path to your background images
import WillMeet from '../WillMeet/WillMeet';

const WhyAttend = () => {
  return (
    <>
    <div className="why-attend-container">
      <div className="why-attend-text">
        <h2>WHY ATTEND</h2>
        <p>
          5th Annual Future Banks Summit & Awards KSA 2024 will highlight the enabling role of digitalization in reshaping the future of banking. The pandemic has forced digital acceleration at such a massive scale that banks are not just looking to transform but forced to reimagine the business. Delegates will experience a power-packed agenda consisting of presentations, panel discussions, and keynotes from globally and regionally renowned speakers, panelists, and moderators.
        </p>
        <p>
          If you are ready to innovate and join the ranks of the Brightest minds in the industry while resonating with the following reasons compelling enough to attend, then register today:
        </p>
      </div>
      <div className="why-attend-cards">
        <div className="why-attend-card" style={{ backgroundImage: `url(${Techvid10})` }}>
          <div className="card-content">
            <p>Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe</p>
          </div>
        </div>
        <div className="why-attend-card" style={{ backgroundImage: `url(${Techvid10})` }}>
          <div className="card-content">
            <p>Network with Industry Peers in a solution- oriented environment</p>
          </div>
        </div>
        <div className="why-attend-card" style={{ backgroundImage: `url(${Techvid10})` }}>
          <div className="card-content">
            <p>
Discuss Significant Partnerships and Collaborations with Industry leaders</p>
          </div>
        </div>
      </div>
      <button className="view-speakers-button">View Experts Speaker</button>
    </div>
    <WillMeet/>
    </>
  );
};

export default WhyAttend;
