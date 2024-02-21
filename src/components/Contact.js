import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
            <div>
                <p ><span>Email :</span> latheesh805@gmail.com</p>
                <p ><span>Mobile :</span> +91 7013342819</p>
            </div>
            <div className="contact-form">
        <form>
            <div id='alpha'>
          <div className="form-group">
            <label htmlFor="First-name">First Name:</label>
            <br></br>
            
            
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="Last-name">Last Name:</label>
            <br></br>
            
            <input type="text" id="name" name="name" />
          </div>
          </div>
          <div className="form-group" id='form-group'>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group" id='form-group'>
            <label htmlFor="message">Message:</label>
            <br></br>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button id='button' type="submit">Submit</button>
        </form>
      </div>

      
      
    </section>
  )
}
;
export default Contact;