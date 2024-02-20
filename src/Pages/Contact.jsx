import React from "react";
import "./CSS/Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <form>
        <label for="name">Name: </label>
        <input type="text" id="name" name="name"></input> <br></br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input> <br></br>
        <label for="message">Message: </label>
        <textarea id="message" name="message" rows="5" cols="30"></textarea>
      </form>
    </div>
  );
};

export default Contact;
