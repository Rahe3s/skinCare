import React, { useState } from 'react'
import './Contact.css'
import {MdOutlinePhone,MdEmail,MdLocationPin} from 'react-icons/md'
function Conatct() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  return (
    <section id='contact' className='contact'>
      <div className='contact_header'>
        <h1>Contact US</h1>
        
        </div>
        <div className='contact_wrapper'>
          <div className="contact_left">
          
            <div>
            <div className="contact_info"><MdOutlinePhone className='contact_icon'/><span>+919874561230</span></div>
            <div className="contact_info"><MdEmail className='contact_icon'/><span>john23@gmail.com</span></div>
            <div className="contact_info"><MdLocationPin className='contact_icon'/><span>Kerala,India</span></div>
            </div>
          </div>
          <div className="contact_right">
            <div>
            <div className="contact_forms">
              <input type='text' id='name'
               placeholder='Your Name' 
               name='name' 
               value={name}
               onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="contact_forms">
              <input type='email' id='email'
               placeholder='Your Email' 
               name='email' 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="contact_forms">
              <textarea type='text' id='message'
               placeholder='Message' 
               name='message' 
               value={message}
               onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <button className='send' type='submit' >Send</button>
            </div>
            </div>
         
    
        </div>
        <div className='product_footer'>

    </div>
    </section>
  )
}

export default Conatct