import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSingup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    console.log("Login", formData);
  };

  const singup = async () => {
    console.log("Sign Up", formData);
  };

  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>{state}</h1>
        <div className="loginsingup-fields">
          {state === "Sign Up" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Username"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={() => (state === "Login" ? login() : singup())}>
          Continue
        </button>
        <p className="loginsingup-login">
          {state === "Sign Up"
            ? "Already have an account? "
            : "Create an Account "}
          <span
            onClick={() => {
              setState(state === "Sign Up" ? "Login" : "Sign Up");
            }}
          >
            {state === "Sign Up" ? "Login Here" : "Click Here"}
          </span>
        </p>
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            By Continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
