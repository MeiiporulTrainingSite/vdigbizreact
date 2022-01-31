import React from 'react';
import Div from '../../Div/div';
import '../../images/application.jpeg';
import './application.css';

export default function Application() {
    return <div>
  <Div className="application_page">
  
   <h1>APPLICATION DEVELOPMENT</h1>
  </Div>
  
  <div class="app_dev">        
      <div className='content1'>
      <p className="devapp">Provide scalable enterprises application development including web applications, desktop applications, cloud-based applications, distributed applications and real-time applications solutions that are known for their high-performance catering to different industry verticals by managing the software development lifecycle end-to-end. We develop solutions that cater to your business requirements and that are quick with the delivery. With a well-defined architecture we ensure rich user experience with innovative user centric interfaces. Our team uses structured framework for development with programing best practices, coding guidelines and standards. With SOA architecture at core, our highly professional development team develops front end neutral web applications with plug and play features. </p>
      <h1>Our approach </h1>
      </div>
      <ul className="applist">
          <li>Create superior functionality by developing new custom applications</li>
          <li>Modify / enhance customized applications</li>
          <li>Convert from one platform/architecture to other</li>
          <li>Plan complete end-to-end solutions</li>
      </ul>
      <div className='offshore'>
      <h1>Offshore Development Centre </h1>
      <p>
      Here, at Vdigbiz, we believe that our Offshore Development Centre (ODC) 
      in India is the extension of our client’s team to provide highest quality 
      and productivity over time. Our main purpose is for our customers to have 
      a dedicated team in our development center that provides superior quality 
      of customized services with flexibility and versatility and save substantial 
      costs related to project execution.
           </p>
      
      </div>    
  </div>
  </div>;
  }