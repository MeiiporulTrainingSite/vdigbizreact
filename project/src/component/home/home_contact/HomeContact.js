import React from 'react';
import { Link } from 'react-router-dom';
import "./home_contact.css";

export default function HomeContact() {
  return( <section className='home_contact'>
      <div className='home_contact_logo'>
          <h1 className='home_contact_h1'>vDigBiz</h1>
          <div className='home_contact_icons'>
              <i class="fa fa-facebook-f"></i>
              <i class="fa fa-instagram"></i>
          </div>
      </div>

      <div className='home_quicklinks'>
          <h1 className='home_contact_quick'>
              <p>Quick Links</p>
              <p className='line home_quick'></p>
          </h1>
          <ul className='quicklinks_list'>
          <li><Link to ="/"> Home</Link></li>
            <li><Link to ="/about"> About</Link></li>
            <li><Link to ="/team">Our Team</Link></li>
            <li><Link to ="/service">Servies</Link></li>
            <li><Link to ="/contact"> Contact</Link></li>
            
          </ul>
      </div>

      <div className='get_in_touch'>
          <h1 className='home_touch'>
              <p>Get-in-touch</p>
              <p className='line home_get'></p>
          </h1>
          <p>15 WEST SQUARE DRIVE APT 6, ROCHESTER, NEW YORK, 14623</p>
          <p>+1 585 360 2434</p>
          <p>info@vdigbiz.com</p>
      </div>


         </section>);
}
