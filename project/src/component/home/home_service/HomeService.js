import React from "react";
import TopWaves from "./waves/topWaves";
import "./HomeService.css";
import HomeServiceList from "./homeservice_list";

export default function HomeService() {
    const serviceData=[{
        serviceImage:"analytics.jpeg",
        servicealt:"analytics",
        servicelist:"Analytics",
        className:"homeAnalytics",
        link:"/analytics"
    },
    {
        serviceImage:"application.jpeg",
        servicealt:"application development",
        servicelist:"Appliction Development",
        className:"homeApplication_dev",
        link:"/application_dev"
    },
    {
        serviceImage:"mobileapp.jpeg",
        servicealt:"mobile app development",
        servicelist:"Mobile App Development",
        className:"homeMobile",
        link:"/mobile_app"
    },
    {
        serviceImage:"consulting.jpeg",
        servicealt:"consulting",
        servicelist:"Consulting",
        className:"homeConsulting",
        link:"/consulting"
    },
    {
        serviceImage:"product.png",
        servicealt:"product development",
        servicelist:"Product development",
        className:"homeProduct",
        link:"/product"
    },
    {
        serviceImage:"team.jpeg",
        servicealt:"application maintenance",
        servicelist:"Application Maintenance",
        className:"homeApplication_main",
        link:"/applicationMaintenance"
    }
]
  return (
    <div>
      <TopWaves className="service_bg">
        <div className="homeservice_content">
          <div className="serviceHeading_content">
            <h1 class="homeservice_heading">
              <p>OUR SERVICES</p>
              <p class="line homeservice_line"></p>
            </h1>
            <p class="homeserviceheading_content">
              Innovation. Collaboration. Interoperability. Scale. Speed. These
              elements are necessary to meet the demands of increased synergies
              and greater return on investment. The amalgamation of technology
              and healthcare in transforming the future is multifaceted, and
              embracing openness ─ in platforms, technology and culture and this
              is a key to getting where we need to go. Our tools and processes
              are designed to work for today and think for tomorrow.
            </p>
          </div>
          <div className="home_servicelist_flex">
          {serviceData.map((service,index)=>(
              <HomeServiceList 
              key={index+1}
              serviceImage={service.serviceImage}
              servicealt={service.servicealt}
              servicelist={service.servicelist}
              className={service.className}
              link={service.link}
              />
          ))}
          </div>
        </div>
      </TopWaves>
    </div>
  );
}
