import React, {useRef} from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          toast.success('Email Sent Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea rows='6' placeholder='Type us a message' name='message' />
      <button className='btn' type="submit" value="Send">Submit</button> 
      </form>
    </div>
  )
}
