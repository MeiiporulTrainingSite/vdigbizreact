import React from 'react';
import "./AboutContent.css";
import {Link} from "react-router-dom"

export default function AboutContent(props) {
  const aboutImage=props.image;
    
    const imageProps={
        logo:require("../../images/"+aboutImage)}
  
  return <div className='Company_content_home'>
          <h1 className='about_heading_home'>
              <p className='heading_home'>{props.heading}</p>
              <p className={props.lineClassName}></p>
          </h1>
          <img src={imageProps.logo} alt={props.alt} className='home_about_images'></img>
        <p className="home_aboutteam_content">{props.headingContent}</p>
        <Link to={props.link}><button class="read_more">Read More</button></Link>
  </div>;
}
