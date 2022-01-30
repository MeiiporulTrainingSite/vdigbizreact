import React from 'react';
import Div from '../../Div/div';
import '../../images/analytics.jpeg';
import './mobile.css';

export default function Mobileapp() {
  return <div>
<Div className="home_page">
<img className='aboutimg' src={require('../../images/mobileapp.jpeg')} alt="about image"/>
 <h1>ANALYTICS</h1>
</Div>

<div class="about_us">        
    <div className='about_content'>
    <p className="analytics_first">We build seamless and intuitive digital experiences across Mobile Applications (iOS, Android, Hybrid). Our solutions are based on industry-leading technology that enables remote access to resources, real-time reporting, user self-service and alerts. We ensure that our work processes deliver high quality mobile apps as per the requirements. Our team has expertise in delivering scalable, interactive, innovative & robust end-to-end mobile application for consumer-facing and corporate environments and to keep up with the emerging trends of mobile platforms, SDKs, new app designs, upcoming mobility features, functionality, and trending applications.</p>
    <h1>Our Mobile Development Keystones are</h1>
    <ul>
        <li>User Centric Design</li>
        <li>Cross-Platform Coverage</li>
        <li>Performance</li>
        <li>Scalability & Interoperability</li>
        <li>Security & Compliance</li>
    </ul>
    
    </div>    
</div>
</div>;
}