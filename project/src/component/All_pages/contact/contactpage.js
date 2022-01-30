import "./contact.css";
import { useFormik } from "formik";
import React from "react";
import Div from "../../Div/div.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaMapMarkerAlt ,  FaPhoneAlt } from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
export default function () {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject:"",
      message:"",
    },
    validate,
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // }
  });

  return (
    <div>
      <Div className="Contact_page">
        <h1>Contact</h1>
    </Div>
    <div className="formbox">
    <p>SEND US A MESSAGE</p>
    <form onSubmit={formik.handleSubmit} className="messagebox">
    
      
      <label htmlFor="name" className="label">Name </label>
      <input className="input"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.name}
      />
      {formik.errors.name ? <div className="error"> {formik.errors.name} </div> : null}
      <label htmlFor="email" className="label">Email </label>
      <input className="input"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        values={formik.values.email}
      />
      {formik.errors.email ? <div className="error"> {formik.errors.email} </div> : null}
      <label htmlFor="subject" className="label">Subject </label>
      <input className="input"
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.subject}
      />
       <label htmlFor="message" className="label">Message </label>
      
      <textarea className="textarea" id="message" name="message" rows="4" cols="16"
      name="message"
      onChange={formik.handleChange}
      values={formik.values.email}></textarea>
      <button type="submit" className="btn">
        Send Message
      </button>
  
    </form>
 </div>
 <div className="grid">
 <div className="address">
 <h1>Visit Us</h1> 
 <FaMapMarkerAlt className="icon" />
 <p>15 WEST SQUARE DRIVE APT 6, ROCHESTER, NEW YORK, 14623</p></div>
 <div className="phone">
 <h1>PHONE</h1> 
 <FaPhoneAlt className="icon" />
 <p>+1 585 360 2434</p></div>
 <div className="email">
 <h1>EMAIL</h1>
 <AiOutlineMail className="icon" />
 <p>info@vdigbiz.com</p> </div>
 
 </div>
    </div>
  );
}


