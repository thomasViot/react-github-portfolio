import "../styles/FormStyle.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom';



import React from 'react'

const Form = () => {

  const form = useRef();
  const navigate = useNavigate();

  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zuyywkj', 'template_1c41l9q', form.current, 'EwnwEk480B9rhifeh')
      .then((result) => {
          console.log(result.text);
          navigate('/react-github-portfolio/Submitted');
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name*</label>
        <input type="text" name="from_name" required/>
        <label>Email header*</label>
        <input type="text" name="email_header" required/>
        <label>Your email*</label>
        <input type="email" name="from_email" required/>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send"/>
        <h4>* required fields</h4>
      </form>

      
        
    </div>
  )
}

export default Form