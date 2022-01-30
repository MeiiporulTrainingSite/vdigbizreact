import React from 'react';
import AboutContent from './AboutContent';
import "./About_company.css";

export default function AboutCompany() {
   
    const AboutCompanyData=[{
        heading:"About Us",
        lineClassName:"line aboutus_line_home",
        // image:"https://assets.website-files.com/5a6eee1392eb9700011b712f/5bf280ca3a50d12f43cc85c0_7-Ways-to-Improve-Work-Performance.jpg",
        image:"aboutus_home.jpg",
        alt:"About us",
        headingContent:"At Vdigbiz, our aim is to work at the intersection of health care and information technology to connect people and systems around the globe. We use the latest technology to create solutions that let healthcare communities engage in significant outcomes and improvements. It is our quest to relentlessly seek breakthrough innovation that will outline healthcare of the future. And we believe that what we do does not just impact the healthcare community – it impacts the world.",
        link:"/about"
    },
{
    heading:"Our Team",
    lineClassName:"line our_team_line",
    image:"our_team.jpeg",
    alt:"Our team",
    headingContent:"Our consultants include medical practitioners, software engineers, designers, data scientists, business managers, entrepreneurs, and research scientists. Our experts seamlessly combine strategy, big data, advanced predictive and prescriptive analytics, and implementation processes to change the way healthcare clients think, decide, and act. We support our clients by surfacing data that enables them to make informed decisions for better management and smarter care.",
link:"/team"
}]
  return <div className='home_AboutCompany'>
    {AboutCompanyData.map((data,index)=>(
        <AboutContent
        key={index+1}
        heading={data.heading} 
        lineClassName={data.lineClassName}
        image={data.image}
        alt={data.alt}
        link={data.link}
        headingContent={data.headingContent}
        />
    ))}
  </div>;
}
