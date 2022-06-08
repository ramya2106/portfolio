import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactstyle.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contactdetails = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ho3v14c', 'template_d3c6459', form.current, 's1ExF3b2c5oEn_XFz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const mystyle = {
    display: "flex",
    color: "#fff",
    height: "20%",
    width: "40%",
    marginLeft: "10rem"
   };
  const iconstyle = {
    marginRight: "1rem"
  }
  return (
        <div className='contactme'>
          <div className='contact-details'>
            <div className='phone-info' style={mystyle}>
            <div className='phone-icon' style={iconstyle}>
              <FaPhoneAlt/>
            </div>
            <div className='phone-num'>9345769246</div>
            </div>
            <div className='mail-details' style={mystyle}>
            <div className='mail-icon ' style={iconstyle}><FiMail/></div>
            <div className='mail-addr'>ramyasankar@gmail.com</div>
            </div>
            <div className='loc-details' style={mystyle}>
            <div className='loc-icon' style={iconstyle}><IoLocationOutline/></div>
            <div className='loc-addr'>Chennai</div>
            </div>
          </div>
        <div className='formbox'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
        </div>
    </div>
  )
}

export default Contactdetails