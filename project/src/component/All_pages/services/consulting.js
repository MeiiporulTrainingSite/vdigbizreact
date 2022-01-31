import React from 'react';
import Div from '../../Div/div';
import '../../images/consulting.jpeg';
import './consulting.css';

export default function Consulting() {
    return <div>
  <Div className="home_page">
  <img className='aboutimg' src={require('../../images/consulting.jpeg')} alt="consulting"/>
   <h1>Consulting</h1>
  </Div>
  
  <div class="consulting">        
      <div className='content_consult'>
      <p className="consult">
          
Our consulting services focus on our clients' most critical issues and 
opportunities in information technology: strategy, management, performance 
improvement, technology, information security, digital transformation and 
advanced analytics.  A team of functional experts with deep knowledge find the 
right solution that is flexible and cost-effective and perfectly corresponds to the 
business goals and strategy of the client. We help businesses scale their development 
teams by utilizing our experienced engineers.</p>
</div> 
<h1>Business Consulting </h1>
<ul>
<li>Improve performance & efficiency</li>

<li>Suggest right business solution</li>

<li>Build a consensus and commitment around any corrective action</li>

<li>Achieve organizational purposes and objectives</li>
</ul>     
         
  </div>
  </div>;
  }