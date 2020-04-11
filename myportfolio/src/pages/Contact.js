import React from "react";

function Contact(props) {
  return (
    <div className="contact-container-wrapper">
      <div className="contact-container">
        <h1 className="header">Get In Touch</h1>
        <div className="info-container">
          <p>
            <span>Email:</span>
            <span>soumabakari@gmail.com</span>
          </p>
          <p>
            <span>Phone:</span>
            <span>347-406-3662</span>
          </p>
        </div>
        <form className="form">
          <h3 className="header"> Send Me a Message</h3>
          <div>
            <input placeholder="Name" />
            <br />
            <input placeholder="Email" />
            <br />
            <textarea
              rows="10"
              cols="50"
              placeholder="Send me a kind message"
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
