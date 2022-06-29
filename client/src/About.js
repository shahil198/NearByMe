import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './css/About.css';
function About() {
  return (
    <div className='about-uni'>
      <Navbar />
      <div className='about-container'>
        <div className='about-upper'>
        <h4><span >Who ARE WE ?  </span> We are the community that provides services to people of Daily Household Stuffs in the very efficient effective and easy way . You are only one touch away from these Services. Just select what you need and get it.
        </h4>
        <h4>
        <span className='about-upper-2'>Why you should choose us ? </span> We are providing you all these services without any intermediate charge . No need of heavy charges .No worries about security.
        </h4>
        <h4>
        <span className='about-upper-3'>Who can Register ? </span>Those who are looking for providing any type of services can register on our platform. Any one can register in a couple of minutes by just filing our form.</h4>
        </div>
        <div className='about-mid'>
            <h3>"Choose Best, Leave Rest!"</h3>
          </div>
       
      </div>
      <div className='about-bottom'>
     
      </div>
      <Footer/>
    </div>
  )
}

export default About
