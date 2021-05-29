import React, { useState,} from 'react'
import Sharecom from './Sharecom'
function Contact() {
  const [data,setData]=useState({
    FullName:'',
    MobileNumber:'',
    EmailId:'',
    Query:''
  });
  function InputEvent(event){
    const {name,value}=event.target
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };
  const forSubmit=(e)=>{
    e.preventDefault()
    alert(`welcome ${data.FullName}`)
  };
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'><strong>Contact Us</strong></h1>
      </div>
      <div className='container Contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={forSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='FullName'
                  value={data.FullName}
                  onChange={InputEvent}
                  placeholder="Please Enter You Name" />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label">Your Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='MobileNumber'
                  value={data.MobileNumber}
                  onChange={InputEvent}
                  placeholder="Please Enter Your Mobile Number"/>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='EmailId'
                  value={data.EmailId}
                  onChange={InputEvent}
                  placeholder="Please Enter Your Mail-Id"/>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label">Your Query</label>
                <textarea className="form-control"
                  id="exampleFormControlTextarea1"
                  name='Query'
                  value={data.Query}
                  onChange={InputEvent}
                  rows="3">
                </textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </>
  );
}

export default Contact;