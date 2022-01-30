import React from 'react';
import Div from '../../Div/div';
import '../../images/appdev.jpeg';
export default function Application() {
    return <div>
  <Div className="home_page">
  <img className='aboutimg' src={require('../../images/application.jpeg')} alt="about image"/>
   <h1>APPLICATION DEVELOPMENT</h1>
  </Div>
  
  <div class="about_us">        
      <div className='about_content'>
      <p className="analytics_first">Provide scalable enterprises application development including web applications, desktop applications, cloud-based applications, distributed applications and real-time applications solutions that are known for their high-performance catering to different industry verticals by managing the software development lifecycle end-to-end. We develop solutions that cater to your business requirements and that are quick with the delivery. With a well-defined architecture we ensure rich user experience with innovative user centric interfaces. Our team uses structured framework for development with programing best practices, coding guidelines and standards. With SOA architecture at core, our highly professional development team develops front end neutral web applications with plug and play features. </p>
      <h1>Our approach </h1>
      <ul>
          <li>Improved data driven decision making</li>
          <li>Shortened approval time, higher quality care with reduced cost</li>
          <li>Cost effective and exceptional patient care at all level</li>
      </ul>
      <h1>Predictive and Prescriptive Solution</h1>
      <li>Predict, aids to prevent and effectively treat acute & chronic diseases</li>
      <li>Identify and help to prevent medical error</li>
      <li>Help social-economic improvement in public health</li>
      <li>Improve quality of healthcare overall</li>
      <li>Help individual physician, hospital & insurance carrier </li>
      <li>Initiate and spearhead health care research</li>
      </div>    
  </div>
  </div>;
  }