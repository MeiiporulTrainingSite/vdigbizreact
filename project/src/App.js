import React from 'react';
import Layout from "./component/Div/Layout";
import { Switch,Route } from 'react-router-dom';
import HomePage from './component/home/homepage';


import "./App.css";

export default function App() {
  return <Layout>
    <Switch>
      <Route path="/" exact><HomePage/></Route>
      <Route path="/about"></Route>
      <Route path="/team"></Route>
      <Route path="/service"></Route>
      <Route path="/analytics"></Route>
      <Route path="/appliction_dev"></Route>
    </Switch>
  </Layout>;
}
