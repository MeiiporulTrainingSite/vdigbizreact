import React from 'react';
import "./home_servicelist.css";
import { Link } from 'react-router-dom';

export default function HomeServiceList(props) {
    const serviceImage=props.serviceImage;
    
    const serviceProps={
        logo:require("../../images/"+serviceImage)}
   return <div className='homeservice_list'>
   <img src={serviceProps.logo} alt={props.servicealt} className='homeservicelist_images'></img>
   <p><Link to ={props.link}>{props.servicelist}</Link></p>
  </div>;
}
