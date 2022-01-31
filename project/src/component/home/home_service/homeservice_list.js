import React from 'react';
import "./home_servicelist.css";

export default function HomeServiceList(props) {
    const serviceImage=props.serviceImage;
    
    const serviceProps={
        logo:require("../../images/"+serviceImage)}
   return <div className='homeservice_list'>
   <img src={serviceProps.logo} alt={props.servicealt} className='homeservicelist_images'></img>
   <p>{props.servicelist}</p>
  </div>;
}
