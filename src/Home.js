import React from 'react'
import web from '../src/images/facebook.jpg'
import './index.css'
import Sharecom from './Sharecom';
function Home() {
  return (
    <div className="Home">
      <Sharecom 
      name='Grow your journey with' 
      imgsrc={web} 
      visit='/About'
      btname='about us'/>
    </div>
  );
}

export default Home;