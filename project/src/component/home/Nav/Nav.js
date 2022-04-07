import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <header className="nav_head">
      <h1 className="home_logo">VDIGBIZ</h1>
      <ul className="menu">
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/team">Our Team</Link></li>
        <li>
         <p className="home_service"><Link to ="/service"> Service</Link></p>
          <ul class="service-list-home">
            <li><Link to ="/analytics"> Analytics</Link></li>
            <li><Link to ="/application_dev"> Application Development</Link></li>
            <li><Link to ="/mobile_app"> Mobile App Development</Link></li>
            <li><Link to ="/consulting"> Consulting</Link></li>
            <li><Link to ="/product"> Product Development</Link></li>

            <li><Link to ="/applicationMaintenance"> Application Maintenance</Link></li>

          </ul>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}
