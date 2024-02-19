import React, { useState } from "react";
import "./CSS/LoginSignup.css";
const LoginSingup = () => {
  const [state, setState] = useState("Login");

  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>{state}</h1>
        <div className="loginsingup-fields">
          {state === "Sign Up" ? (
            <input type="text" placeholder="Name"></input>
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email Address"></input>
          <input type="password" placeholder="Password"></input>
        </div>
        <button>Continue</button>
        {state === "Sign Up" ? (
          <p className="loginsingup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="loginsingup-login">
            Create an Account{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click Here
            </span>
          </p>
        )}

        <div className="loginsingup-agree">
          <input type="checkbox" name="" id=""></input>
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
