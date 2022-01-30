import React from 'react';
import Layout from "./component/Div/Layout";
import { Switch,Route } from 'react-router-dom';
import HomePage from './component/home/homepage';
import AboutPage from './component/All_pages/About/about';
import Analytics from './component/All_pages/services/analytics';
import Mobileapp from './component/All_pages/services/mobile_app';

import "./App.css";

export default function App() {
  return <Layout>
    <Switch>
      <Route path="/" exact><HomePage /></Route>
      <Route path="/about"><AboutPage /></Route>
      <Route path="/team"></Route>
      <Route path="/service"></Route>
      <Route path="/analytics"><Analytics/></Route>
      <Route path="/appliction_dev"></Route>
      <Route path="/mobile_app"><Mobileapp/></Route>
    </Switch>
  </Layout>;
}
