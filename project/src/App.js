import React from 'react';
import Layout from "./component/Div/Layout";
import { Switch,Route } from 'react-router-dom';
import HomePage from './component/home/homepage';
import Contactpage from "./component/All_pages/contact/contactpage.js"
import AboutPage from './component/All_pages/About/about';
import Analytics from './component/All_pages/services/analytics';
import Application from './component/All_pages/services/application_dev.js';
import Mobileapp from './component/All_pages/services/mobile_app';
import Service from './component/All_pages/mainservice/Service';
import "./App.css";
import Maintanence from './component/All_pages/services/appliction Maintenance';
import Consulting from './component/All_pages/services/consulting';

export default function App() {
  return <Layout>
    <Switch>
      <Route path="/" exact><HomePage /></Route>
      <Route path="/about"><AboutPage /></Route>
      <Route path="/team"></Route>
      <Route path="/service"><Service /></Route>
      <Route path="/analytics"><Analytics/></Route>
      <Route path="/appliction_dev"><Application/></Route>
      <Route path="/appliction Maintenance"><Maintanence/></Route>
      <Route path="/consulting"><Consulting/></Route>
      <Route path="/contact"><Contactpage /></Route>
      <Route path="/mobile_app"><Mobileapp/></Route>
          </Switch>
  </Layout>;
}

