import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../index.css';



const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nswbyex', 'template_kaa7i8a', form.current, 'user_Ld2mI0y1e16c2SzyWou9G')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
      return (



        <div className='form'>

        
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className='text' type="text" name="user_name" />
          <label>Email</label>
          <input className='text' type="email" name="user_email" />
          <label>Message</label>
          <textarea className='text'  name="message" />
          <input type="submit" value="Send" />
        </form>  
        
        </div>
      );
      

};

export {ContactForm}






