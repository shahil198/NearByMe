import React from 'react'
import Navbar from './Navbar'
import './css/contact.css';
import Footer from './Footer';
function ContactUs() {
  return (
    <div className='contact-uni'>
    <Navbar/>
    <div className='contact-main'>
      <div className='contact-inner'>
        <form  className="contact-form" action="">
        <h3 className='contact-h33'>Contact Us</h3>
        <p className='contact-pp'>If you have any query, feel free to contact us.</p>
      
          <label className="form-group">
						<input type="text" className="form-control"  required />
						<span>Your Name</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control"  required />
						<span for="">Your Mail</span>
						<span className="border"></span>
					</label>

          <label className="form-group" >
						<textarea name="" id="" className="form-control" required></textarea>
						<span for="">Your Message</span>
						<span className="border"></span>
					</label>
          <button className="contact-button">Submit </button>
        </form>
      </div>
      
    </div>
    <Footer/> 
    
    </div>
  )
}

export default ContactUs
