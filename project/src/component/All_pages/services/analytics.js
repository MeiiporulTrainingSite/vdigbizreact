import React from 'react';
import Div from '../../Div/div';
import './analytics.css';

export default function Analytics() {
  return <div>
<Div className="analytics_page">
 <h1>ANALYTICS</h1>
</Div>

<div class="analytics_parent"> 
       
    <div className='analytics_content'>
    <p className="analytics_first">Vdigbiz provides analytic insights to clients to accelerate their business by providing efficient analytics services and help clients derive significant insights from large and complex data sets. Our services help clients use data and analytics to create new business models and revenue streams – all while ensuring security, quality and regulatory compliance of data.</p>
    </div>
    
    <div className='analytics_second'>
    <h1>Health Care Analytic Product & Solution</h1>
    <ul className='list_first'>
        <li>Improved data driven decision making</li>
        <li>Shortened approval time, higher quality care with reduced cost</li>
        <li>Cost effective and exceptional patient care at all level</li>
    </ul>
    </div>
    <div className='analytics_third'>
    <h1>Predictive and Prescriptive Solution</h1>
    <ul className='list_second'>
    <li>Predict, aids to prevent and effectively treat acute & chronic diseases</li>
    <li>Identify and help to prevent medical error</li>
    <li>Help social-economic improvement in public health</li>
    <li>Improve quality of healthcare overall</li>
    <li>Help individual physician, hospital & insurance carrier </li>
    <li>Initiate and spearhead health care research</li>
    </ul>
    </div>    
</div>
</div>;
}