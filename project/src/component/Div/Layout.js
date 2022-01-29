import React from 'react';
import Nav from '../home/Nav/Nav';
import HomeContact from "../home/home_contact/HomeContact";
import Footer from '../home/footer/footer';

export default function Layout(props) {
  return <div >
<Nav />
<main>{props.children}</main>
<HomeContact />
<Footer />
  </div>;
}
