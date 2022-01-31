import Div from "../../Div/div";
import './about.css';


export default function AboutPage() {
  return <div>
<Div className="about_page">
 <h1>ABOUT US</h1>
</Div>

<div className="about_us">
<img className='aboutimg' src={require('../../images/aboutus_home.jpg')} alt="about image"/>
      
    <div className='about_content'>

    <h1 className="about_heading">ABOUT VDIGBIZ </h1>
    <hr/>  
    <div className="about_first">
    <p>At Vdigbiz, our aim is to work at the intersection of health care and information technology to connect people and systems around the globe. We use the latest technology to create solutions that let healthcare communities engage in significant outcomes and improvements. It is our quest to relentlessly seek breakthrough innovation that will outline healthcare of the future. And we believe that what we do does not just impact the healthcare community – it impacts the world.</p>
    </div>

    </div>    
</div>
</div>;
}