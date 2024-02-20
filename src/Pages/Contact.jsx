import React from "react";
import "./CSS/Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-page-container">
        <h1>Contact Page</h1>
        <div className="contact-form">
          <label for="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Name"
            required
          ></input>{" "}
          <br></br>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            required
          ></input>{" "}
          <br></br>
          <label for="message">Message: </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="30"
            autoComplete="off"
            placeholder="Describe your message......."
            required
          ></textarea>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
