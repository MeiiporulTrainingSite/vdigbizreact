import React from 'react';
import Div from "../../Div/div";
import './about.css';
// import '../images/about.png';

export default function AboutPage() {
  return <div>
<Div className="home_page">
 <h1>ABOUT US</h1>
</Div>
<div class="about_us">
<h1 class="about_heading"><p>ABOUT VDIGBIZ</p></h1>        
    <div className='about_content'><img className='aboutimg' src={require('../../images/about.png')} alt="about image"/>
    <p className="about_first">At Vdigbiz, our aim is to work at the intersection of health care and information technology to connect people and systems around the globe. We use the latest technology to create solutions that let healthcare communities engage in significant outcomes and improvements. It is our quest to relentlessly seek breakthrough innovation that will outline healthcare of the future. And we believe that what we do does not just impact the healthcare community – it impacts the world.</p>
    </div>    
</div>

</div>;
}