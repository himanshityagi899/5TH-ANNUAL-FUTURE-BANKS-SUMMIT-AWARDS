import React from 'react';
import './Para.css'; // Import the CSS file for styling
import Agenda from '../Agenda/Agenda';

const Para = () => {
  return (
    <div className='para-container'>
      <p className='para-text'>
        The 4th Annual Future Banks Summit KSA 2023 will showcase the latest innovations and practical case studies, along with interactive panel discussions designed to guide the banking sector in KSA in identifying the right strategies to overcome long-standing resistance and be future-ready! An exciting and timely conference is on its way, discussing the future of the financial industry in KSA driven by innovation and digital advancements, with the adoption of technologies such as AI, digital transformation, digital banking, banking in the metaverse, intelligent automation, regtech, data analytics, cloud migration, cyber security, digital payments models, along with tech-driven redefined business continuity planning strategies.
      </p>
      <Agenda/>
    </div>
    
  );
};

export default Para;
