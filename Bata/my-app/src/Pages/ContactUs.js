import React from 'react'
import Footer from '../Components/Footer';
import Headar from '../Components/Headar';

function ContactUs() {
  return (
    <div>
        <Headar /> 
       
        <div className="contact-us-section">
        <h1>Contact Us</h1>
        <p>We value your feedback. Please fill out the form below to submit your complaint.</p>
        
        <form className="complaint-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="complaint">Complaint:</label>
          <textarea id="complaint" name="complaint" rows="5" required></textarea>
          <button type="submit" className="submit-button">Submit</button>
          
        </form>
  
       
      </div>

        <Footer />
    </div>
  );
}

export default ContactUs