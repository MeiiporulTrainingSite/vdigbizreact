import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <header className="nav_head">
      <h1 className="home_logo">VDIGBIZ</h1>
      <ul className="menu">
        <li><Link to ="/">Home</Link></li>
        <li>About</li>
        <li>Our Team</li>
        <li>
          Service
          <ul class="service-list-home">
            <li> Analytics</li>
            <li> Application Development</li>
            <li> Mobile App Development</li>
            <li> Consulting</li>
            <li> Product Development</li>
            <li> Application Maintenance</li>
          </ul>
        </li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
