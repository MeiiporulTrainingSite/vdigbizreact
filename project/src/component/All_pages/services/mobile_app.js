import React from 'react';
import Div from '../../Div/div';
import '../../images/analytics.jpeg';
import './mobile.css';

export default function Mobileapp() {
  return <div>
<Div className="mobile_page">
 <h1>Mobile App Development</h1>
</Div>

<div class="mobile_parent">   
     
    <div className='mobile_content'>
    <p className="mobile_first">We build seamless and intuitive digital experiences across Mobile Applications (iOS, Android, Hybrid). Our solutions are based on industry-leading technology that enables remote access to resources, real-time reporting, user self-service and alerts. We ensure that our work processes deliver high quality mobile apps as per the requirements. Our team has expertise in delivering scalable, interactive, innovative & robust end-to-end mobile application for consumer-facing and corporate environments and to keep up with the emerging trends of mobile platforms, SDKs, new app designs, upcoming mobility features, functionality, and trending applications.</p>
    </div>
    
    <div className="mobile_head">
    <h1>Our Mobile Development Keystones are</h1>
    <ul className="mobile_list">
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