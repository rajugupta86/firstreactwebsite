import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/facebook.jpg'
import './index.css'
function Sharecom(props) {
  return (
    <div className="App">
      <section id='header' className='align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 flex-column justify-content-center'>
                <h1>{props.name}<strong className='brand-name'> Us</strong></h1>
                <h2 className='my-3'>I am a Web Developer</h2>
                <div>
                  <NavLink 
                  to={props.visit}>
                    <button type='button' 
                     className='btn-get-started'>{props.btname}</button>
                     </NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.imgsrc}className='img-fluid animated' alt='home img'/>
              </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}

export default Sharecom;