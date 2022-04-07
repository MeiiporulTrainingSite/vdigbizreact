import React from "react";
import Div from "../Div/div";
import "./homepage.css";
import AboutCompany from "./About_company/AboutCompany";
import HomeService from "./home_service/HomeService";

export default function HomePage() {
  return (
    <div>
      <Div className="home_page">
        <h1>Developing Health Care And Solution</h1>
      </Div>
      <AboutCompany />
      <HomeService />
    </div>
  );
}
