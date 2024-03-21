import './ContactUs.css'
import React, { useState } from 'react'

const ContactUs = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
  };

  return (
    <div className="container-m">
      <div className="row justify-content-center">
        <div className="col-md-8  col-lg-full">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input onChange={(e) => {
        setName(e.target.value);}}
         type="text" className="form-control form-control-lg" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input onChange={(e) => {
        setEmail(e.target.value);}}type="email" className="form-control form-control-lg" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea onChange={(e) => {
        setMessage(e.target.value);}}className="form-control form-control-lg" id="message" rows="5"></textarea>
                </div>
                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;