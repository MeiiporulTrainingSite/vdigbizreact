import React from 'react';
import Layout from "./component/Div/Layout";
import { Switch,Route } from 'react-router-dom';
import HomePage from './component/home/homepage';
import Contactpage from "./component/All_pages/contact/contactpage.js"
import AboutPage from './component/All_pages/About/about';
import Application from './component/All_pages/Services/application_dev.js';
import Analytics from './component/All_pages/Services/analytics';
import Mobileapp from './component/All_pages/Services/mobile_app';
import Service from './component/All_pages/mainservice/Service';
import "./App.css";
import Maintanence from './component/All_pages/Services/applicationMaintenance';
import Consulting from './component/All_pages/Services/consulting';
import Product from './component/All_pages/Services/productdevelop';
import Team from './component/All_pages/Team/team';


export default function App() {
  return <Layout>
    <Switch>
      <Route path="/" exact><HomePage /></Route>
      <Route path="/about"><AboutPage /></Route>
      <Route path="/team"><Team/></Route>
      <Route path="/service"><Service /></Route>
      <Route path="/analytics"><Analytics/></Route>
      <Route path="/application_dev"><Application/></Route>
      <Route path="/applicationMaintenance"><Maintanence/></Route>
      <Route path="/consulting"><Consulting/></Route>
      <Route path="/contact"><Contactpage /></Route>
      <Route path="/mobile_app"><Mobileapp/></Route>
      <Route path="/product"><Product/></Route>
          </Switch>

  </Layout>;
}

