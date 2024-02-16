import React from "react";
import "./CSS/LoginSignup.css";
const LoginSingup = () => {
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email Address"></input>
          <input type="password" placeholder="Password"></input>
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">
          Already have an account? <span>Login Here</span>
          <div className="loginsingup-agree">
            <input type="checkbox" name="" id=""></input>
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSingup;
