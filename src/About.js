import React from 'react'
import web from '../src/images/facebook.jpg'
import Sharecom from './Sharecom';
function About() {
    return (
      <div className="About">
        <Sharecom 
        name='I am freelance website developer from prayagraj, I create professional website. you may connect with' 
        imgsrc={web} 
        visit='/Services'
        btname='Our services'/>
      </div>
    );
  }
  
  export default About;