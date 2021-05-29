import React from 'react'
import Sharecom from './Sharecom'
import web from '../src/images/facebook.jpg'
function Services() {
    return (
      <div className="Services">
        <Sharecom 
      name='Our services connect you and' 
      imgsrc={web} 
      visit='/Contact'
      btname='Contact Us'/>
      </div>
    );
  }
  
  export default Services;